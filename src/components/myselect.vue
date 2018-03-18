<template>
    <div class='select-component'>
      <div class="select-top" @click="toggleList">
        <div class="select-top-text">{{selectList[nowIndex].label}}</div>
        <div class="select-top-arrow" :class="{'active-arrow':showList}"></div>
      </div>
      <ul class="select-list-ul" v-show="showList">
        <li class="select-list-li" v-for="(item,index) in selectList" @click="chooseSelect(index)" :class="{'select-active-li':nowIndex===index}">{{item.label}}</li>
      </ul>
    </div>
</template>
<script>
    export default{
        props:{
            selectList:{type:Array,default:[{label:'默认值',value:'0'}]}
        },
        data(){
            return {
                showList:false,
                nowIndex:0
            }
        },
      methods:{
        toggleList(){
            this.showList=!this.showList;
        },
        chooseSelect(index){
            this.showList=false;
            this.nowIndex=index;
            this.$emit('onselect',index)
        }
      }
    }
</script>
<style scoped>
  .select-component{
    position: relative;
    display: inline-block;
    width: 100%;
    height: 20px;
    border: 1px solid #ccc;
  }
  .select-top-text{
    display: inline-block;
    width:calc(100% - 30px);
    text-align: left;
    padding-left: 10px;
      cursor: pointer;
  }
  .select-top-arrow{
    float: right;
    width: 10px;
    height: 10px;
    margin-top: 5px;
    border-top:1px solid #ccc;
    border-left:1px solid #ccc ;
    border-right:0;
    border-bottom:0;
    transform: rotate(-45deg);
  }
  .active-arrow{
    margin-top: 0;
    margin-right: 5px;
    transform: rotate(-135deg);
  }
.select-list-ul{
  position: absolute;
  margin: 0;
  width: 100%;
  top: 21px;
  /*border: 1px solid #000;*/
}
  .select-list-li{
    width:calc(100% - 10px);
    margin-top:-1px;
    margin-left: -1px;
    text-align: left;
    padding-left: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  .select-list-li:hover{
    background-color: #b4b4b4;
  }
  .select-active-li{
    background-color: #c9c9c9;
  }
</style>
