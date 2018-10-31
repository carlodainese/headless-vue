<template>
  <nav>
      <ul>
          <li v-for="menuItem in menuItems" :key="menuItem.id" v-bind:class="menuItem.title.toLowerCase()">
            <router-link v-bind:to="menuItem.uri">{{ menuItem.title}}</router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
const url = "http://drupal8.docker.localhost:8000/api/menu_items/main";
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


