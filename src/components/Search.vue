<template>
  <div class="search">
    <h2>Type In Your Search Term</h2>
    <form v-on:submit.prevent="getResult(query)">
      <input type="text" placeholder="Type in your search" v-model="query" />
    </form>
    <div class="results" v-if="results">
        <div v-for="result in results">
 
          <span>{{this.results[0].title_1}}</span>
      </div>
    </div>
    
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'search',
  data () {
    return {
      msg: 'Search',
      query: '',
      results: ''
    }
  },
  methods: {
      getResult(query) {
        axios.get("http://drupal8.docker.localhost:8000/rest/view/search?_format=json&keys=" + query
        ).then( response => {
            this.results = response.data;
            console.log(this.results);
            console.log(this.results[0].title_1);
        });
      }
  }
}
</script>


<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>