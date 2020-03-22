# uni-app-frame
> 基于vue-cli的普通项目，包含登录、表单校验、以及基本路由权限判断。
tips:如果你有过vue项目和微信小程序的开发经验，会发现非常容易上手。

## 登录
> 本地运行，输入admin/123456，可登录到系统中

## 表单校验
> 表单校验，采用[graceChecker.js](https://ext.dcloud.net.cn/plugin?id=383)

## 路由权限
> 没有登录，访问[a页面](http://localhost:8080/#/pages/person/person),则会返回到登录页，登录后，会转跳到[a页面](http://localhost:8080/#/pages/person/person)；正常登录，则进入到用户中心