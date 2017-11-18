import Vue from 'vue'
import App from './App.vue'

// 当前项目引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入mui中的样式
import './static/css/mui.min.css'

// 引入vue-router来控制器各个页面的切换
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// vue中请求的时候,除了可以使用axios意外,还可以使用vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入图片预览组件
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)


// 引入各个页面组件
import Home from './components/Home.vue'
import Member from './components/Member.vue'
import Shopcar from './components/ShopCar.vue'
import Search from './components/Search.vue'
import NewsList from './components/NewsList.vue'
import NewsDetail from './components/NewsDetail.vue'
import PhotoList from './components/PhotoList.vue'
import PhotoDetail from './components/PhotoDetail.vue'
import GoodsList from './components/GoodsList.vue'

// 引入全局的css样式
import './root.css'

// 引入moment
import moment from 'moment'
// 定义一个过滤器
Vue.filter('filterName',function (input,fmtString) {
    return moment(input).format(fmtString)
})


// 进行vue-router的实例化
var router = new VueRouter({
    linkActiveClass:'mui-active',
    routes:[
        {name:'root',path:'/',redirect:'/home'},
        {name:'home',path:'/home',component:Home},
        {name:'member',path:'/member',component:Member},
        {name:'shopcar',path:'/shopcar',component:Shopcar},
        {name:'search',path:'/search',component:Search},
        {name:'newslist',path:'/newslist',component:NewsList},
        {name:'newsdetail',path:'/newsdetail/:id',component:NewsDetail},
        {name:'photolist',path:'/photolist',component:PhotoList},
        {name:'photodetail',path:'/photodetail/:id',component:PhotoDetail},
        {name:'goodslist',path:'/goodslist',component:GoodsList}
    ]
})


new Vue({
    el: '#app',
    router,
    render: createElement => createElement(App)
})