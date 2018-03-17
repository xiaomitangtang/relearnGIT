<template>
  <div id="app">
    {{10|add}}
    {{11|del}}
    {{111|update}}
    <input type="text" v-focus>
    <span v-text-color="'rgba(0,255,0,.5)'">绿色半透明文字</span>
    <span v-text-color="'rgba(0,0,255,1)'">蓝色不透明文字</span>
    <span v-text-color="'rgba(255,0,0,1)'">红色不透明文字</span>
    <p>{{num}}</p>
    <button @click="increment">++</button>
    <button @click="decrement">--</button>
    <button @click="deletenum">--5</button>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <router-view></router-view>
    <router-link to="/one/123" tag="button">one</router-link>
     <router-link :to="{name:'TwoPage',params:{a:1,b:2,c:3}}" tag="button">two</router-link>
    <button @click="changeRouter">切换</button>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  data () {
    return {}
  },
  computed:{
    ...mapGetters(['num'])
  },
  methods:{
    ...mapActions(['increment','decrement']),
    deletenum(){
        this.$store.dispatch('decrement',5)
    },
    changeRouter(){
//      console.log(this.$router);
      if(this.$router.history.current.name==='OnePage'){
          this.$router.push({name:'TwoPage',params:{a:'woshi pageOne'}})
      }else{
        this.$router.push({name:'OnePage',params:{a:'wo shi page Two'}})
      }
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  button{
    a{
      display: inline-block;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }
  }
</style>
