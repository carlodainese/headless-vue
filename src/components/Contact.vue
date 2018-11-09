<template>
  <div class="container">
      <h2>Contact form</h2>
      
      <form v-on:submit="Contactform"> 
          <div class="form-group">
              <label for="">Username:</label>
              <br>
              <input type="text" name="title" v-model="name" class="form-control">
          </div>
          <div class="form-group">
              <label for="">Email:</label>
              <br>
              <input type="email" v-model="email" name="" class="form-control">
          </div>
          <div class="form-group">
              <label for="">Subject:</label>
              <br>
              <input type="text" v-model="subject" name="" class="form-control">
          </div>
          <div class="form-group">
              <label for="">Message:</label>
              <br>
              <input type="text" v-model="message" name="" class="form-control">
          </div>
          <h5>Upload a File</h5>
         <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
          
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            webform_id: "contact",
            name: '',
            email: '',
            message: '',
            subject: '',
            file: this.file,
            success: false
        }
    },
    http: {
        headers: {
            'Content-Type' : 'application/json',
            'X-CSRF-Token' : 'raDBcbXRzZ5NAZLpZP34OVpO-XIh_RB3z3LJefg6FxE'
             
        }
    },
    methods: {
        Contactform: function(e) {
            
            e.preventDefault();
            let data = JSON.stringify({
                webform_id: "contact",
                name: this.name,
                email: this.email,
                subject: this.subject,
                message: this.message,
                file: this.file,
                
            }) 
            axios.post("http://drupal8.docker.localhost:8000/webform_rest/submit?_format=json", data, {headers: {
                    'Content-Type': 'application/json',
                    },
                    }
                    );
            this.success = true;
            this.webform_id = 'contact'
            this.name = ''
            this.email = ''
            this.subject = ''
            this.message = ''
            this.file 
            console.log('INVIATO')
        },
 submitFile(){
 
            let formData = new FormData();

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
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },

      handleFileUpload(){
      
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>