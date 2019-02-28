## 项目结构
```bash
├── README.md   #项目描述文件
├── build   #项目编译的配置文件都在这里面
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config   #webpack编译配置文件
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html   #入口html文件
├── package.json  #依赖包的json文件
├── src
│   ├── App.vue
│   ├── api    #接口模块
│   │   ├── config.js
│   │   ├── index.js
│   │   └── requestService.js
│   ├── assets   #静态资源都放这里
│   │   └── logo.png
│   ├── components   #公用组件都放这里      
│   │   ├── Header
│   │   │   ├── index.js
│   │   │   ├── index.less
│   │   │   └── index.vue
│   │   ├── TabBar
│   │   │   ├── index.js
│   │   │   ├── index.less
│   │   │   └── index.vue
│   │   └── index.js
│   ├── js   #js文件都放这里
│   │   ├── find.js
│   │   ├── hello.js
│   │   ├── my.js
│   │   └── news.js 
│   ├── main.js   #vue实例化的那个js，很重要
│   ├── pages   #页面都放这里
│   │   ├── Find.vue
│   │   ├── HelloWorld.vue
│   │   ├── My.vue
│   │   └── News.vue
│   ├── router
│   │   └── index.js   #页面路由注册文件，很重要
│   └── styles   #样式都放在这里
│       ├── find.less
│       ├── hello.less
│       ├── index.less
│       ├── my.less
│       └── news.less
└── static  #静态资源放这里，不参与编译打包的那种
```

## /pages/Vue文件代码编写风格

```html
<template>
  <div class="news">
    <HeaderBar name="资讯中心"></HeaderBar>
    <div class="page-wrap">
      <ul class="list-view">
        <li class="list-cell" v-for="item in list">{{item}}</li>
      </ul>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script src="@/js/news.js"></script> 
<!-- js、less文件统统独立区分开，增强代码可读写 -->
<style src="@/styles/news.less" lang="less"></style> 
<!-- lang的意思是，样式语言为：less -->
```

## /components 公用组件模块代码风格
```bash
├── Header
│   ├── index.js
│   ├── index.less
│   └── index.vue
├── TabBar
│   ├── index.js
│   ├── index.less
│   └── index.vue
└── index.js
```
###### 注意：每个组件对应三个index文件

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

