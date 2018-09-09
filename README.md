# webchat
[![Build Status](https://www.travis-ci.org/hua1995116/webchat.svg?branch=master)](https://www.travis-ci.org/hua1995116/webchat)

## 启动项目

MongoDB/Node v7+

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

## 功能
- [x] 聊天功能 -- 完成
- [x] 多个聊天室 -- 完成
- [x] 与机器人对接 -- 完成
- [x] 图片发送 -- 完成
- [x] 注册功能 -- 完成
- [x] 登录功能 -- 完成
- [x] 历史记录 -- 完成

## 技术栈

 - 前端 vue，vue-router ,vuex
 - 后端 nodejs，express
 - 数据库 mongodb
 - 通讯 websocket
 - 脚手架工具 vue-cli

## API

<a href="./API.md">API</a>


## 效果

<img src="http://s3.qiufengh.com/screenshot/5.png"/>

<img src="http://s3.qiufengh.com/screenshot/6.png"/>

<img src="http://s3.qiufengh.com/screenshot/7.png"/>

<img src="http://s3.qiufengh.com/screenshot/8.png"/>

## 版本更新

<a href="./RELEASE.md">RELEASE</a>

## 项目wiki
[vue+websocket+express+mongodb实战项目（实时聊天）（一）](http://blog.csdn.net/blueblueskyhua/article/details/70807847)

[vue+websocket+express+mongodb实战项目（实时聊天）（二）](http://blog.csdn.net/blueblueskyhua/article/details/73250992)

[vue-chat项目之重构与体验优化](http://blog.csdn.net/blueblueskyhua/article/details/78159672)