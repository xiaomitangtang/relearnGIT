import 'babel-polyfill'  //如果用了vuex，这个必须用，因为低版本ie不支持es6，
import Vue from 'vue'
import App from './App.vue'
import filters from './filters'
import directives from './directives'
import store from './store'
import vueRouter from 'vue-router'
import routes from './router'
import axios from 'axios'
import _ from 'lodash'

/*Object.keys(filters).forEach(function (key) {

  Vue.filter(key,filters[key])

});*/
Vue.use(directives);
Vue.use(vueRouter);
Vue.use(filters);
Vue.prototype.$http=axios;

// Vue.http.options.emulateJSON = true;//这个是将post请求改为form data的形式

const router=new vueRouter({mode:'history',routes});
new Vue({
  el: '#app',
  store,
  router,
mounted(){
  // console.log(filters);
},
  render: h => h(App)
});
