/**
 * Created by hp on 2018/3/17.
 */
export default {
  install(Vue,options){
    Vue.directive('focus',{
      inserted(el){
        el.focus()
      }
    });
    Vue.directive('textColor',{
      inserted(el,binding){
        el.style.color=binding.value
      }
    })
  }
}
