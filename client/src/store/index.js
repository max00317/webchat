/**
 * Created by Administrator on 2017/4/17.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import url from '@api/server.js';
import {setItem, getItem} from '@utils/localStorage';
import {ROBOT_NAME, ROBOT_URL} from '@const/index';
import findLast from 'lodash/findLast';
import findLastIndex from 'lodash/findLastIndex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 个人信息
    userInfo: {
      src: getItem('src'),
      userid: getItem('userid'),
      id: getItem('id'),
      token: getItem('token'),
    },
    lookUserInfo: {
    },
    // 朋友列表
    friendList: [],
    isDiscount: false,
    isLogin: false,
    // 存放聊天记录 key - []
    roomdetail: {},
    roomUsers: {},
    // 存放机器人开场白
    robotmsg: [
    {
      id: 1,
      username: ROBOT_NAME,
      src: ROBOT_URL,
      msg: '如果微信群过期了,添加作者微信(添加时记得备注:项目交流)'
    },
    {
      id: 2,
      username: ROBOT_NAME,
      src: ROBOT_URL,
      img: "https://s3.qiufengh.com/webchat/webcaht-my.jpeg"
    },
    {
      id: 3,
      username: ROBOT_NAME,
      src: ROBOT_URL,
      msg: '期待你的加入'
    },
    {
      id: 4,
      username: ROBOT_NAME,
      src: ROBOT_URL,
      img: "https://s3.qiufengh.com/webchat/webchat-group.jpeg"
    },
    {
      id: 5,
      username: ROBOT_NAME,
      src: ROBOT_URL,
      msg: '如果还有什么想知道的可以问我'
    }],
    unRead: {
      room1: 0,
      room2: 0
    },
    hotUserList: [],
    vipUserList: [],
    searchUserList: [],
    // svg
    svgmodal: null,
    // 是否启动tab

    emojiShow: false,

    theme: "#2196f3"
  },
  getters: {
    // getUsers: state => state.roomdetail.users,
    getInfos: state => state.roomdetail.infos,
    getRobotMsg: state => state.robotmsg,
    getEmoji: state => state.emojiShow
  },
  mutations: {
    setDiscount(state, value) {
      state.isDiscount = value;
    },
    setUnread(state, value) {
      for (let i in value) {
        state.unRead[i] = +value[i];
      }
    },
    setLoginState(state, value) {
      state.isLogin = value;
    },
    setUserInfo(state, data) {
      const {type, value} = data;
      // 如果是 key - value 形式，为单项设置
      if(value) {
        setItem(type, value);
        state.userInfo[type] = value;
      } else {
        const info = Object.keys(data);
        // 清空所有
        if(info.length == 0) {
          Object.keys(state.userInfo).map(item => {
            state.userInfo[item] = '';
            setItem(item, '');
          });
        } else {
          // 多数据一次性设置
          info.map(item => {
            state.userInfo[item] = data[item];
            setItem(item, data[item]);
          });
        }
      }
    },
    setEmoji(state, data) {
      state.emojiShow = data;
    },
    setSvgModal(state, data) {
      state.svgmodal = data;
    },
    delRoomDetailImg(state, data) {
      const { roomid, clientId } = data;
      const clientIndex = findLastIndex(state.roomdetail[roomid], {clientId});
      state.roomdetail[roomid].splice(clientIndex, clientIndex + 1);
    },
    setRoomDetailStatus(state, data) {
      const { roomid, status, clientId, typeList, newClientId } = data;
      const clientItem = findLast(state.roomdetail[roomid], {clientId});
      typeList.map(item => {
        clientItem[item] = data[item];
      })
      // 重试
      if(newClientId) {
        clientItem.clientId = newClientId;
      }
    },
    setRoomDetailInfosAfter(state, data) {
      const { roomid, msgs } = data;
      if(!state.roomdetail[roomid]) {
        state.roomdetail[roomid] = [];
      }
      state.roomdetail[roomid].push(...msgs);
    },
    setRoomDetailInfosBeforeNoRefresh(state, {data, roomid}) {
      const list = state.roomdetail[roomid] || [];
      const newData = data.concat(list);
      state.roomdetail[roomid] = newData;
    },
    setRoomDetailInfosBefore(state, {data, roomid}) {
      const list = state.roomdetail[roomid] || [];
      const newData = data.concat(list);
      state.roomdetail = {
        ...(state.roomdetail),
        [roomid]: newData
      }
    },
    setRoomDetailInfos(state, {data, roomid}) {
      state.roomdetail.infos = data;
    },
    setUsers(state, data) {
      const { roomid, onlineUsers } = data;
      const roomUsers = []
      const list = onlineUsers;
      state.roomUsers = {
        ...(state.roomUsers),
        [roomid]: list
      }
    },
    setRobotMsg(state, data) {
      state.robotmsg.push(data);
    },
    setLookUserInfo(state, data) {
      state.lookUserInfo = data;
    },
    setFriendList(state, data) {
      state.friendList = data;
    },
    sethotUserList(state, data) {
      state.hotUserList = data;
    },
    setvipUserList(state, data) {
      state.vipUserList = data;
    },
    setSearchList(state, data) {
      state.searchUserList = data;
    },
    setAllmsg(state, data) {
      state.roomdetail = data;
    }
  },
  actions: {
    async getSearch({state, commit}, data) {
      const res = await url.getSearch(data);
      if(res.data.errno === 0) {
        commit('setSearchList', res.data.data)
      }
    },
    async getvipuser({state, commit}, data) {
      const res = await url.getvipuser(data);
      if(res.data.errno === 0) {
        commit('setvipUserList', res.data.data)
      }
    },
    async getHostUserList({state, commit}, data) {
      const res = await url.getHostUserList(data);
      if(res.data.errno === 0) {
        commit('sethotUserList', res.data.data)
      }
    },
    async addFriend({}, data) {
      const res = await url.postAddFriend(data);
      return res;
    },
    async uploadAvatar({}, data) {
      const res = await url.postUploadAvatar(data);
      return res.data;
    },
    async uploadImg({}, data) {
      try {
        const res = await url.postUploadFile(data);
        if (res) {
          if (res.data.errno === 0) {
            return {
              data: res.data.data,
              code: 0,
            }
          } else {
            return {
              data: res.data.data,
              code: 500,
            }
          }
        }
      } catch(e) {
        return {
          data: '服务端异常,重新发送',
          code: 500,
        }
      }
    },
    async registerSubmit({}, data) {
      const res = await url.RegisterUser(data);
      if (res.data.errno === 0) {
        return {
          status: 'success',
          data: res.data
        };
      }
      return {
        status: 'fail',
        data: res.data
      };
    },
    async loginSubmit({}, data) {
      const res = await url.loginUser(data);
      if (res.data.errno === 0) {
        return {
          status: 'success',
          data: res.data
        };
      }
      return {
        status: 'fail',
        data: res.data
      };
    },
    async getUserInfo({state, commit}, data) {
      const res = await url.getUserInfo(data);
      if(res.data.errno === 0) {
        commit('setLookUserInfo', res.data.data);
      }
    },
    async postListFriend({state, commit}, data) {
      const res = await url.postListFriend(data);
      if(res.data.errno === 0) {
        commit('setFriendList', res.data.data);
      }
    },
    async getRoomHistory({state, commit}, data) {
      const res = await url.getRoomHistory(data);
      if(res.data.errno === 0) {
        const result = res.data.data;
        if(result) {
          commit('setAllmsg', result);
        }
      }
    },
    async getAllMessHistory({state, commit}, data) {
      try {
        const res = await url.RoomHistoryAll(data);
        if (res.data.errno === 0) {
          const result = res.data.data;
          if(data.msgid) {
            commit('setRoomDetailInfosBeforeNoRefresh', {
              data: result.data,
              roomid: data.roomid
            });
          } else {
            commit('setRoomDetailInfosBefore', {
              data: result.data,
              roomid: data.roomid
            });
          }

          return {
            data: result.data
          }
        }
      } catch(e) {

      }
    },
    async getRobatMess({commit}, data) {
      const username = ROBOT_NAME;
      const src = ROBOT_URL;
      const res = await url.getRobotMessage(data);
      if (res) {
        const robotdata = JSON.parse(res.data.data);
        let msg = '';
        // 分类信息
        if (robotdata.code === 100000) {
          msg = robotdata.text;
        } else if (robotdata.code === 200000) {
          msg = robotdata.text + robotdata.url;
        } else {
          msg = '暂不支持此类对话';
        }
        commit('setRobotMsg', {msg, username, src});
      }
    }
  }
});
export default store;
