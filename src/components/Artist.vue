
<template>
  <div class="col-md-12">
    <div class="form-group">
      
    </div>
    <div class="table-responsive">
      <b-table responsive:class="table table-striped table-bordered" >
        
          <tbody>
               <div class="col-md-3 col-sm-12"  v-for="lista in lista" >
               <tr>
                <td>{{lista.field_sito}}</td>
                <td>{{lista.created}}</td>
                <td><span v-html="lista.Titolo"></span></td>
                <td>prova</td>
                <td>x</td>
              </tr>
              </div>
          </tbody>
      </b-table>
    </div>
    </div>

   
</template>

<script>
export default {
    name: 'lista',
    data() {
        return {
            lista: [],
            lista: this.getLista(),
           
        }
    },
    methods: {
        getLista: function() {
        console.log("OK");
    
            axios.get("http://drupal8.docker.localhost:8000/rest/view/attivita").then(
            response => {
                this.lista = response.data;
                console.log(this.lista);
                console.log("PROVA");

            }, response => {
                console.log("Error fetching data from URL make sure your server up running");
            });
        }

    }
};


</script>