
<template>
  <div id="menu"class="row">  
  <ul id="menu">
          <li class="menu__item" v-for="menuItem in menuItems" :key="menuItem.id" v-bind:class="menuItem.title.toLowerCase()">
           
        <a v-bind:href="menuItem.uri">{{ menuItem.title}}</a>
          </li>
           <li class="menu__item">
        
           <a href=/create>Crea nuovo contenuto</a></li>
      </ul>
      </div>
  </template>

<script>
const url = "http://drupal8.docker.localhost:8000/api/menu_items/main";

import auth from '../auth'
import functions from '../functions'

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
          console.log(this.menuItems[0].uri);
          //@todo ciclare e per ogni elemento pulire l'uri
          for(var i=0;i<this.menuItems.length;i++){
          this.menuItems[i].uri = functions.cleanUrl(this.menuItems[i].uri);
          }
        })
    },
}
</script>


<style scoped>

ul {
  list-style: none;
}
ul#menu {
    font-family: Verdana, sans-serif;
    font-size: 11px;
    margin: 0;
    padding: 0;
    list-style: none;
}
ul#menu li.menu__item {
    background-color: #ADD8E6;
    border-bottom: 5px solid  #000080;
    display: block;
    width: 148px;
    height: 40px;
    margin: 1px;
    float: left; 
}

#menu li.menu__item a {
    color: #000000;
    display: block;
    font-size: 13px;
   
    text-decoration: none;
    width: 150px;
    height: 40px;
    text-align: center;
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