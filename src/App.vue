<template>
<div id="app">
<Navigation />
<Login />
<Search />
  <nav class="navbar  fixed-top navbar-expand-lg justify-content-between">
    <a class="navbar-brand" href="http://localhost:8081/"><img src="./assets/logo.png" alt=" Headless"></a>
     <ul class="nav navbar-nav">
    <li v-if="user.authenticated"><router-link to="/create">Aggiungi contenuto</router-link></li>
    <li v-if="!user.authenticated"><router-link to="/register">Registrati</router-link></li>

    </ul>
  </nav>
  <router-view ></router-view>
  
<Footer/>
</div>
</template>
<script>

import Lista from './components/Lista'
import Navigation from './components/Navigation'
import Login from './components/Login'
import localStorage from './components/Login'
import Footer from './components/Footer'
import Search from './components/Search'
import Vuex from 'vuex'
import auth from './auth'
import functions from './functions'

Vue.use(Vuex);


export default {
name: 'app',
components: {
    Lista,
    Navigation,
    Search,
    Login,
    Footer
   
    },
    data() {
    return {
        user: auth.user
      }

      
    },
     methods: {
      logout() {
        auth.logout()
      }

 
}
}
   

</script>
<!-- styling for the component -->
<style type="text/css">
 @import url('./assets/style.css');
</style>