<template>

<div id="container">
 
<div class="aff"><Recent></Recent></div>
<div class="aff">

        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <h2 class="text-center">{{this.cleaned_article.title[0].value}}</h2>
           </div>
            <div class="col-md-10 col-md-offset-1 single-page-bottom">
            <strong>Creato il:</strong>
               <span>{{this.cleaned_article.created[0].value}}</span>
               <p><strong>Note:</strong>
               <span v-html="this.note"></span></p>
               <p><strong>Descrizione:</strong>
              <span v-html="this.cleaned_article.body[0].value"></span></p>
   </div>
        </div>

</div>
 </div>
  
</template>


<script>
import functions from '../functions'
import auth from '../auth'
import axios from 'axios'
import Recent from './Recent'
    export default{
      props:['users'],
      components: { Recent },
         data:function(){
           return {
            article: [],
            cleaned_article: [],
            note: "",
            }
          },
         mounted:function(){
            
            axios.get('http://drupal8.docker.localhost:8000/attivita/'+this.$route.params.id+'?_format=hal_json',
              {headers: 
                auth.setHeader()}).then((response)=>{
                  console.log(response.data);
                  this.article=response.data;
                  this.cleaned_article=this.article;
               
                  if (this.article.field_note_di_soluzione) { 
                    this.note= this.cleaned_article.field_note_di_soluzione[0].value;
                  } else {
                      this.note= "<strong>Per vedere questo dato occorre essere autenticati</strong>";
                  }
                    
                  this.cleaned_article.body[0].value=functions.cleanUrl(this.article.body[0].value);  
                  console.log(this.cleaned_article.body[0].value);
                })
              },
     }
</script>

<style>
#container .aff {
  width: 500px;
  float: left;
}
</style>