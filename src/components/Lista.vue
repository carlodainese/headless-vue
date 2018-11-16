<template>

<div  id="albums">
    <div class="row">
        <div class="col-md-3 col-sm-12"  v-for="lista in lista">
            <div class="card">
                
                <div class="card-body">
                    <h5 class="card-title album_title">  
                    <span>{{lista.field_sito}}</span> </h5>
                    <div class="card-text">
                        <p>
                            <strong>created :</strong>
                            <span>{{lista.created}}</span>
                        </p>
                                     <p>
                        <strong>titolo:</strong>
                            <span v-html="lista.Titolo"></span></p>
                             
                    </div>
                </div>
            </div>
            <br>
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