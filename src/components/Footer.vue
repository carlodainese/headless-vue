<template>
<div class="footer">
      <nav class="navbar fixed-down navbar-expand-lg justify-content-between"">
      <br>
      <ul class="nav navbar-nav">
      <div id="menu" >  
      
          <li class="menu__item" v-for="menuItem in menuItems" :key="menuItem.id" v-bind:class="menuItem.title.toLowerCase()">
            <router-link v-bind:to="menuItem.uri">{{ menuItem.title}}</router-link>
          </li>
      
      </div>
      </ul>
      </nav>
      </div>
      
</template>

<script>
const url = "http://drupal8.docker.localhost:8000/api/menu_items/footer";
export default {
    
    data: function() {
      return {
          menuItems: [],
      }
    },
    mounted() {
      fetch(url)
        .then(response => response.json())
        .then((data) => {
          this.menuItems = data;
        })
    },
}
</script>


<style>
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: red;
    color: white;
    text-align: center;
}
</style>