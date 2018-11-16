<template>
  <nav>
  <div id="menu"class="row">  
  <ul class="menu">
          <li class="menu__item" v-for="menuItem in menuItems" :key="menuItem.id" v-bind:class="menuItem.title.toLowerCase()">
            <a v-bind:href="menuItem.uri">{{ menuItem.title}}</a>
          </li>
      </ul>
      </div>
  </nav>
</template>

<script>
const url = "http://drupal8.docker.localhost:8000/api/menu_items/main";

import auth from '../auth'
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

ul {
  list-style: none;
}

.menu {
    display: flex;

    &__item {
        position: relative;
        padding-right: 3rem;

        &--dropdown {}
    }

    &__link {
        //color: $menu_link_color;
        text-transform: uppercase;

        &:hover {
            //color: $menu_link_hover_color;
        }

        &--toggle {}
    }

    &__icon {
        margin: 0 !important;
    }
}

</style>