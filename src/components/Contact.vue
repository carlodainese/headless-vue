<template>
  <div class="container">
      <h2>Contact form</h2>
      <form method="POST" @submit.prevent="submitFile" class="setting" accept-charset="UTF-8">
      <div class="form-group">
              <label for="">Name:</label>
              <br>
                <input type="text" v-model="name">
          </div>
          
          <div class="form-group">
              <label for="">Email:</label>
              <br>
              <input type="mail" v-model="email">
          </div>
          <div class="form-group">
              <label for="">Subject:</label>
              <br>
              <input type="text" v-model="subject">
          </div>
          <div class="form-group">
              <label for="">Message:</label>
              <br>
              <input type="text" v-model="message">
          </div>
          <h5>Upload a File</h5>
         <div class="container">
    
      
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      
      <input class="btn btn-primary form-control letter-spcing" type="submit" value="Create">

  </div>
     </form>   
  </div>
</template>

<script>
import {router} from '../main';
import auth from '../auth'
import axios from 'axios'
export default {
    data() {
        return {
            webform_id: "contact",
            name: '',
            email: '',
            message: '',
            subject: '',
            file: '',
            success: false
        }
    },
   
    methods: {
        submitFile(){
        let data = JSON.stringify({
                webform_id: "contact",
                name: this.name,
                email: this.email,
                subject: this.subject,
                message: this.message,
                file: this.file

              
            });
             axios.post('http://drupal8.docker.localhost:8000/webform_rest/submit?_format=hal_json', data,
                {headers:
                  auth.getAuthHeader()
              }).then((response)=>{
                console.log('DONE');
                let formData = new FormData();

            formData.append('file', this.file);

            axios.post("http://drupal8.docker.localhost:8000/form/contact/",
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'X-CSRF-Token' : 'raDBcbXRzZ5NAZLpZP34OVpO-XIh_RB3z3LJefg6FxE' }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        });
            })
      },


 A(){let formData = new FormData();

            formData.append('file', this.file);

            axios.post("http://drupal8.docker.localhost:8000/form/contact?webform_id=contact--file",
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'X-CSRF-Token' : 'raDBcbXRzZ5NAZLpZP34OVpO-XIh_RB3z3LJefg6FxE' }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        });
      },

      handleFileUpload(){
      
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>

<style>
    
</style>