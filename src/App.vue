<template>
<div id="app">
<Navigation />
  <nav class="navbar  fixed-top navbar-expand-lg justify-content-between">
    <a class="navbar-brand" href="#"><img src="./assets/logo.png" alt=" Headless"></a>
    
    
  </nav>
  <router-view ></router-view>
</div>
</template>
<script>

import Lista from './components/Lista'
import Navigation from './components/Navigation'

export default {
name: 'app',
components: {
    Lista,
    Navigation
    
  }
}

</script>
<!-- styling for the component -->
<style type="text/css">
 @import url('./assets/style.css');
</style>