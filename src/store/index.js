/**
 * Created by hp on 2018/3/17.
 */
import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex);
const state={
  num:parseFloat(window.sessionStorage.getItem('vuexstatenum'))||0
};
const actions={
  increment({commit,state}){
  commit('increment')
  },
  decrement({commit,state},op){
    commit('decrement',op)
  }
};
const mutations={
  increment(state){
    state.num++;
    window.sessionStorage.setItem('vuexstatenum',state.num)
  },
  decrement(state,op){
    console.log(typeof op);
    op=typeof op==='number'?op:1;
    state.num-=op;
    window.sessionStorage.setItem('vuexstatenum',state.num)
  }
};
const getters={
  num(state){
    return state.num
  }
};
export default new vuex.Store({
  state,getters,mutations,actions
})
