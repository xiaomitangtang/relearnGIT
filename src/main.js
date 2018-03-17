import 'babel-polyfill'  //如果用了vuex，这个必须用，因为低版本ie不支持es6，
import Vue from 'vue'
import App from './App.vue'
import filters from './filters'
import directives from './directives'
import store from './store'
import vueRouter from 'vue-router'
import routes from './router'
/*Object.keys(filters).forEach(function (key) {

  Vue.filter(key,filters[key])

});*/
Vue.use(directives);
Vue.use(vueRouter);
Vue.use(filters);
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
