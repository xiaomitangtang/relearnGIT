<template>
    <div class='2222'>这里是1111
    <p>{{1|aaaa}}</p>
      <p>{{$route.params}}</p>
      <child>
        <p slot="c2">我爱你</p>
        <p slot="c1">我bu 爱你</p>
      </child>
    </div>
</template>
<script>
  import child from './child.vue'
    export default{
        data(){
            return {}
        },
      mounted(){
//        console.log(this.$route.params);
      },
      components:{
        child
      }
    }
</script>
<style>
</style>
