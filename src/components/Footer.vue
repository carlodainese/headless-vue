<template>
  <nav>
      <div id="menu"class="row">  
  <ul class="menu">
          <li class="menu__item" v-for="menuItem in menuItems" :key="menuItem.id" v-bind:class="menuItem.title.toLowerCase()">
            <router-link v-bind:to="menuItem.uri">{{ menuItem.title}}</router-link>
          </li>
      </ul>
      </div>
  </nav>
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


<style scoped>

</style>