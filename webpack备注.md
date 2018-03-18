js中引用图片，不要直接写字符串，不然webpack打包之后图片呗webpack改名，但是你的src字符串没有改名
请使用require（src），这样webpack打包之后会将你的src与打包之后的图片进行对应


css调用的图片会被webpack自动解析改名

props:{
  slides:{
    type:Array,
    default:[]
  }
}
eventHub
在一个性文件实例化一个Vue()

import Vue form 'vue'
const eventBus=new Vue();
export { eventBus }

然后在自己的页面
import eventBus form 'eventBus'

methods:{
  Click事件(){
  eventBus.$emit('funName')
  }
}


然后在其他组件监听
import eventBus form 'eventBus'

mounted(){
eventBus.on('funName',()=>{
  重置某些属性
})
}


event.stopPropagation()   阻止事件冒泡
两个组件都不冒泡的时候怎么实现点击这一个关闭另一个，，

在点击该组件的时候通过eventBus 触发一个emit

