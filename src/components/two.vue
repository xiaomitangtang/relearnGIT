<template>
    <div class=''>这里是2222
      <input type="text" v-model.number="mynum">{{mynum}}
      <div class="select"><my-select :selectList="selectListData" @onselect="choosedSelect"></my-select></div>
    </div>
</template>
<script>
  import mySelect from './myselect.vue'
    export default{
        data(){
            return {
                mynum:0,
                selectListData:[
                  {label:'数学',value:0},
                  {label:'语文',value:1},
                  {label:'英语',value:2},
                  {label:'地理',value:3},
                  {label:'生物',value:4}
                    ]
            }
        },
      mounted(){
        var obj1={a:[1,2,3],b:{a:1}};
     var obj2={a:[1,2,3],b:{a:1}};
        console.log('obj1==obj2===>'+_.eq(obj1, obj2));
        console.log('1==“1”===>'+_.eq(1, '1'));
      },
      methods:{
        choosedSelect(index){
          console.log(this.selectListData[index]);
        }
      },
      components:{
        mySelect
      }
    }
</script>
<style>
  .select{
    float: right;
    width: 200px;
  }
</style>
