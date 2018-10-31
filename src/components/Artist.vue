<template >
<div id="app">
  {{ info.created }}
</div>
</template>

<script>
    import axios from 'axios';

    var b= new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get("http://drupal8.docker.localhost:8000/rest/view/attivita")
      .then(response => (this.info = response.body))
  }
})
</script>