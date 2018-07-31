import VueRouter from 'vue-router'
import Home from './pages/Home'
import Workers from './pages/Workers'

export default new VueRouter({
    routes:[
        {
            path:'',
            component: Home
        },
        {
            path:'/workers',
            component: Workers
        },
    ],
    mode:'history'
})