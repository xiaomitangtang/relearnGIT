/**
 * Created by hp on 2018/3/17.
 */
import one from '../components/one.vue'
import two from '../components/two.vue'


const routers=[
  {path:'/',redirect:'/one/123'},
  {path:'/one/:id',component:one,name:'OnePage'},
  {path:'/two',component:two,name:'TwoPage'}
];
export default routers
