<template>
  <div id="app">
    {{10|add}}
    {{11|del}}
    {{111|update}}
    <input type="text" v-focus>
    <datepicker :value="new Date()" format="yyyy-MM-dd" ></datepicker>
    <span v-text-color="'rgba(0,255,0,.5)'">绿色半透明文字</span>
    <span v-text-color="'rgba(0,0,255,1)'">蓝色不透明文字</span>
    <span v-text-color="'rgba(255,0,0,1)'">红色不透明文字</span>
    <p>{{num}}</p>
    <button @click="increment">++</button>
    <button @click="decrement">--</button>
    <button @click="deletenum">--5</button>

    <router-view></router-view>
    <router-link  active-class="active"    to="/one/123"      tag="button">one</router-link>
     <router-link active-class="active"    :to="{name:'TwoPage',params:{a:1,b:2,c:3}}" tag="button">two</router-link>
    <button @click="changeRouter">切换</button>
    <button @click="testAjax">测试ajaxGET</button>
    <button @click="textAjax2">测试ajacPost</button>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import datepicker from 'vuejs-datepicker'
export default {
  name: 'app',
  data () {
    return {
        token:111
    }
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
      if(this.$router.history.current.name==='OnePage'){
          this.$router.push({name:'TwoPage',params:{a:'woshi pageOne'}})
      }else{
        this.$router.push({name:'OnePage',params:{a:'wo shi page Two'}})
      }
      console.log(this.$route);

    },
    testAjax(){

      this.$http.get('http://127.0.0.1:9000/index',{params:{name:1,age:2},headers:{
          token:1111,aaa:2222
      }}).then(function (res) {
      console.log('请求成功');
      console.log(res);
    },function (err) {
      console.log('请求失败');
      console.log(err);
    })
    },
    textAjax2(){
      this.$http.post('http://127.0.0.1:9000/index',{name:1,age:2},{headers:{token:'bbbbbbbbb'}}).then(function (res) {
        console.log('请求成功');
        console.log(res);
      },function (err) {
        console.log('请求失败');
        console.log(err);
      })
    }
  },
components:{
  datepicker
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
  .active{
    background-color: red;
  }
</style>
