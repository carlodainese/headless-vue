<template>
<div class="responsive">
<div  id="albums">
    <div class="row">
 <ul id="recent">
    <h6>Contenuti recenti</h6>
        <div v-for="lista in lista">
            <div class="card">
                
                    
                    <h5 class="card-title album_title">  
                    <span v-html="lista.Titolo"></span></h5>
                    <div class="card-text">
                        <p>
                    <strong>created :</strong>
                    <span>{{lista.created}}</span>
                    </p> </div>
              </div>
           <br>
        </div>
         </ul>
    </div>
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
         axios.get("http://drupal8.docker.localhost:8000/rest/view/attivita",{headers: {
                'Accept' : 'application/json'
              }}).then(
            response => {
                this.lista = response.data;
                console.log(this.lista);

            }, response => {
                console.log("Error fetching data from URL make sure your server up running");
            });
        }

    }
};
</script>
<style>
.card
{
 box-shadow: 1px 1px 20px  1px #ddd;
 border:1px solid #ddd;
 width: 300px;
 border-radius: 10px;
}
</style>