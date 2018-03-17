/**
 * Created by hp on 2018/3/17.
 */
export default {
  install(Vue, option){
    // console.log(option);
    Vue.filter('add', val => {
      return 111;
    });
      Vue.filter('del', val => {
        return 222
      });
      Vue.filter('update', val => {
        return val * 1000
      });
      Vue.filter('aaaa', val => {
        return '这里是filterAAAA'
      });
  }
}
