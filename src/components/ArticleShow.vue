<template>
    <div class="container single-page-back">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <h2 class="text-center">{{this.article.title[0].value}}</h2>
            
            </div>
            <div class="col-md-10 col-md-offset-1 single-page-bottom">
            <strong>Descrizione:</strong>
               <span>{{this.article.created[0].value}}</span>
              <span v-html="this.article.body[0].value"></span>
              <span v-html="this.article.field_note_di_soluzione[0].value"></span>

        </div>
        </div>
    </div>
</template>


<script>
    
    export default{
    props:['users'],
       data:function(){
         return {
             article: [],
         }
       },
       mounted:function(){
          this.$http.get('http://drupal8.docker.localhost:8000/attivita/'+this.$route.params.id+'?_format=hal_json').then((response)=>{
            this.article=response.data;
            console.log(this.article);

            console.log(this.article.title[0].value);
            console.log(this.article.field_note_di_soluzione[0].value);
          })
       },
       
    }
</script>