# webchat
[![Build Status](https://www.travis-ci.org/hua1995116/webchat.svg?branch=master)](https://www.travis-ci.org/hua1995116/webchat)
## 项目历程
[vue+websocket+express+mongodb实战项目（实时聊天）（一）](http://blog.csdn.net/blueblueskyhua/article/details/70807847)

[vue+websocket+express+mongodb实战项目（实时聊天）（二）](http://blog.csdn.net/blueblueskyhua/article/details/73250992)

[vue-chat项目之重构与体验优化](http://blog.csdn.net/blueblueskyhua/article/details/78159672)
## 前端监控数据

http://www.qiufengh.com:8080/

## releases
[1.1.0版本](https://github.com/hua1995116/webchat/tree/v1.0.0)

- 完成聊天室
- 机器人聊天
- 登录，注册功能。
- 整站界面部署

[1.2.0版本](https://github.com/hua1995116/webchat/tree/v1.2.0)

- 增加上传图片
- 首屏优化以及改造

[2.0.0版本](https://github.com/hua1995116/webchat/tree/v2.0.0)

- 增加alert,confirm,toast,loading,svg-modal,localStroage等组件。
- 增加历史记录功能
- 增加多个聊天室功能
- 接入前端监控
- 优化切页的效果
- 增加日志记录

[2.2.0版本](https://github.com/hua1995116/webchat/tree/v2.2.0)

- 加入一键部署cdn
- 将node功能模块分离


```
npm install -----安装依赖
npm run dev -----运行
npm run build -----打包
node prod.server.js -----打包后运行
//记得替换
view/Loan.vue下的io.connect('http://qiufengh.com/')
http://qiufengh.com:9090改成自己的项目地址。
```
在线观看
[http://www.qiufengh.com/](http://www.qiufengh.com/)

## API

### POST

#### /user/signin 注册


```
body: {

​	name:  （String）  // 用户名称

​	 password: （String）  // 密码

​	src:  （String）// 随机头像 

}
```
#### /user/signup  登录
```
body: {

​	name:  （String）  // 用户名称

​	 password: （String）  // 密码

}
```
#### /file/uploadimg

formdata格式


```
formdata {

​	file: (Object)  // file文件

​	username:  (String)  //用户名

​	src:  ( String) // 头像

​	roomid:    (String)  // 房间号

​	time:( Date) // 时间戳

}
```




### GET

#### /message  // 获取当前房间的最新80条信息
```
query：{

​	roomid:   (String) // 房间号

}
```
#### /history/message  获取历史记录
```
query：{

​	 current:   (number)// 当前页数  默认80条/页

​	 roomid:  (String) //  房间号

}
```

#### /robotapi
```
query：{

​	 info:   (String)// 信息

​	 id:  (String) // 用户名字

}
```



### 实现功能
- [x] 聊天功能 -- 完成
- [x] 多个聊天室 -- 完成
- [x] 与机器人对接 -- 完成
- [x] 图片发送 -- 完成
- [x] 注册功能 -- 完成
- [x] 登录功能 -- 完成
- [x] 历史记录 -- 完成

### 技术栈

 - 前端 vue，vue-router ,vuex
 - 后端 nodejs，express
 - 数据库 mongodb
 - 通讯 websocket
 - 脚手架工具 vue-cli


最后上几张图。

![这里写图片描述](http://img.blog.csdn.net/20171005172806229?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmx1ZWJsdWVza3lodWE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


![这里写图片描述](http://img.blog.csdn.net/20171005164309491?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmx1ZWJsdWVza3lodWE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

![这里写图片描述](http://img.blog.csdn.net/20171005164044558?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmx1ZWJsdWVza3lodWE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

![这里写图片描述](http://img.blog.csdn.net/20171005172553272?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmx1ZWJsdWVza3lodWE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

