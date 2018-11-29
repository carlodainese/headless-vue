// importing vue vue router and vure resource
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import InstantSearch from 'vue-instantsearch';

Vue.use(VueRouter)
Vue.use(VueResource);
Vue.use(InstantSearch);
Vue.use(Vuex);

//importing comopnets for the routers
import Lista from './components/Lista'
import Artist from './components/Artist'
import Navigation from './components/Navigation'
import Login from './components/Login'
import Logout from './components/Logout'
import Recent from './components/Recent'
import Register from './components/Register'
import Upload from './components/Upload'
import ArticleShow from './components/ArticleShow'
import Contact from './components/Contact'
import Search from './components/Search'
import CreateArticle from './components/CreateArticle'
import Reset from './components/Reset'
import EditArticle from './components/EditArticle'
import P404 from './components/P404'
import Vuex from 'vuex'
import auth from './auth'
import functions from './functions'


auth.checkAuth()

//declaring routers
const routes = [

    {
        path: '/',
        component: Lista, Navigation, Login, Logout, Search

    },
    {
        path: '/lista-attivita',
        component: Lista, Navigation, Login, Logout, Search

    }, 
    {
        path: '/login',
        component: Login, Logout, Register

    },
    {
        path: '/prova',
        component: Artist

    },
    
     {
        path: '/register',
        component: Register, 

    },
        {
        path: '/upload',
        component: Upload, 

    },
    {
        path: '/contact',
        component: Contact, 

    },
     {
        path: '/search',
        component: Search,

    },
       {
        path: '/create',
        component: CreateArticle, 

    },
    {
        path: '/reset-password',
        component: Reset, 

    },
    {
        path: '/recent',
        component: Recent, 

    },
    {   path: '*',
        component: P404,
     },

      { path:'/attivita/:id',
        component: ArticleShow, Recent},
      { path: '/edit/:id', component: EditArticle,name:'editarticle'},
   
]
export const router = new VueRouter({
    routes,
    mode: 'history'
})
//initializing vue app
 /* eslint-disable */
new Vue({
    el: '#app',
    template: '<App/>',
    render: h => h(App),
    components: {
        App
    },
    router

}).$mount('#app')




