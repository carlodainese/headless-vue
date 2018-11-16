<template>
    <div class="container single-page-back">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <h2 class="text-center">{{this.cleaned_article.title[0].value}}</h2>
            
            </div>
            <div class="col-md-10 col-md-offset-1 single-page-bottom">
            <strong>Descrizione:</strong>
               <span>{{this.cleaned_article.created[0].value}}</span>
              <span v-html="this.cleaned_article.body[0].value"></span>
              <span v-html="this.cleaned_article.field_note_di_soluzione[0].value"></span>

        </div>
        </div>
    </div>
</template>


<script>
import functions from '../functions'
import auth from '../auth'
import axios from 'axios'
    export default{
    props:['users'],
       data:function(){
         return {
             article: [],
             cleaned_article: []
         }
       },
       mounted:function(){
          this.$http.get('http://drupal8.docker.localhost:8000/attivita/'+this.$route.params.id+'?_format=hal_json',{headers:
                  auth.getAuthHeader()
              }).then((response)=>{
            this.article=response.data;
            this.cleaned_article=this.article;
            this.cleaned_article.body[0].value=functions.cleanUrl(this.article.body[0].value);  
            console.log(this.article);
          
          })
       },
       
    }
</script>