# init-project
基于 Vue CLI v4.2.2创建的项目

# 创建工程
```
cd init-project & vue create .
manually select fetures
 - Babel
 - PWA
 - CSS Pre-processor (sass[node-sass])
 - Linter/Fomatter (Eslint standard)
 - Router
 - Vuex
 - Unit Testing(jest)
 - E2E Testing(cypress)
```

# 组织目录
```
|-- package-lock.json
|-- package.json
|-- vue.config.js // 需要手动创建
|-- node_modules
|-- public
|   |-- img
|   |   `-- icons
|   |       |-- xxx
|   |-- favicon.ico
|   |-- index.html
|   `-- robots.txt
|-- src
|   |-- App.vue
|   |-- api
|   |   |-- modules
|   |   |   `-- auth.api.js
|   |   `-- request.js
|   |-- assets
|   |   |-- css
|   |   |   `-- reset.css
|   |   |-- fonts
|   |   |   `-- iconfont.css
|   |   |-- images
|   |   |-- js
|   |   |   `-- Util.js
|   |   |-- logo.png
|   |   `-- media
|   |-- components
|   |   `-- Alert
|   |       |-- index.vue
|   |       `-- index.js
|   |-- directive
|   |   `-- index.js
|   |-- filter
|   |   `-- index.js
|   |-- i18n
|   |   |-- index.js
|   |   `-- lang
|   |       |-- en.yml
|   |       |-- tw.yml
|   |       `-- zh.yml
|   |-- main.js
|   |-- mixin
|   |   `-- index.js
|   |-- mock
|   |   |-- index.js
|   |   `-- modules
|   |       `-- auth.mock.js
|   |-- registerServiceWorker.js
|   |-- router
|   |   |-- env
|   |   |   |-- _import_development.js
|   |   |   `-- _import_production.js
|   |   `-- index.js
|   |-- store
|   |   `-- index.js
|   |-- theme
|   |   |   |-- dark
|   |   `-- index.sass
|   `-- views
|       |-- About.vue
|       |-- Home.vue
|       `-- Layout.vue
`-- tests
    |-- e2e
    |   |-- plugins
    |   |   `-- index.js
    |   |-- specs
    |   |   `-- test.js
    |   `-- support
    |       |-- commands.js
    |       `-- index.js
    `-- unit
        `-- example.spec.js
```
# 配置相关依赖
````
npm install axios -S
npm install mockjs -D
npm install vuex-persistedstate -S
npm install  pug pug-html-loader pug-plain-loader -D
npm install vue-i18n -S
npm install nprogress -S
npm install fastclick -S // 解决手机端点击延迟的问题
```
# 命令
```
npm install // install dependence
npm run serve // Compiles and hot-reloads for development
npm run build // Compiles and minifies for production
npm run test:unit // Run your unit tests
npm run test:e2e // Run your end-to-end tests
npm run lint // Lints and fixes files
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
