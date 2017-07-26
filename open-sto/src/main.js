// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

/*在这里可以配置vue*/
Vue.config.silent = false //取消 Vue 所有的日志与警告。

/*配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。生产版本设为 true 可以启用检查。*/
Vue.config.devtools = true



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
