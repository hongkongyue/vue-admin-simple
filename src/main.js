import './assets/style/style.less'

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store/';
import App from './App.vue'

// 富文本编辑器
// import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'



Vue.use(ElementUI);
Vue.use(VueRouter);
// Vue.use(VueQuillEditor)
const router = new VueRouter({
  routes:routes
});

// 注册全局过滤器
import vFilter from './assets/utils/filter';
for (var key in vFilter) {
  var key = Vue.filter(key, vFilter[key]);
};

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
