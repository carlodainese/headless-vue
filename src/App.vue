<template>
<div id="app">
<Navigation />
<Login />
  <nav class="navbar  fixed-top navbar-expand-lg justify-content-between">
    <a class="navbar-brand" href="#"><img src="./assets/logo.png" alt=" Headless"></a>
    
    
  </nav>
  <router-view ></router-view>
  <Footer/>
</div>
</template>
<script>

import Lista from './components/Lista'
import Navigation from './components/Navigation'
import Login from './components/Login'
import Footer from './components/Footer'

export default {
name: 'app',
components: {
    Lista,
    Navigation,
    Login,
    Footer
    }
}

</script>
<!-- styling for the component -->
<style type="text/css">
 @import url('./assets/style.css');
</style>