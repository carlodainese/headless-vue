// importing vue vue router and vure resource
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import InstantSearch from 'vue-instantsearch';

Vue.use(VueRouter)
Vue.use(VueResource);
Vue.use(InstantSearch);

//importing comopnets for the routers
import Lista from './components/Lista'
import Artist from './components/Artist'
import Navigation from './components/Navigation'
import Login from './components/Login'
import Search from './components/Search'
import Register from './components/Register'
//declaring routers
const routes = [

    {
        path: '/',
        component: Lista, Navigation, Login

    }, {
        path: '/artist',
        component: Artist
    },
    
    {
        path: '/l',
        component: Login, Register

    },
    
     {
        path: '/r',
        component: Register, 

    },

    {
        path: '/s',
        component: Search, 

    }
  
]
const router = new VueRouter({
    routes,
    mode: 'history'
})
//initializing vue app

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    },
    router

}).$mount('#app')

