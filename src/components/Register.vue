<template>
  <div class="container">
      <h2>Register new user</h2>
      <div class="alert alert-success" v-if="success">
          OK
      </div>
      <form v-on:submit="registerUser"> 
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
       
          <button type="submit" class="btn btn-success">Create User</button>
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            success: false
        }
    },
    http: {
        headers: {
            'Accept' : 'json',
            'Content-Type' : 'application/hal+json',
            'X-CSRF-Token' : 'NQtW2PYSlZdFcf2TRdL7ykkxA4YaPcDblA4YMmwOW4Y',
             'Authorization' : 'Basic YWRtaW46YWRtaW4='
        }
    },
    methods: {
        registerUser: function(e) {
            
            e.preventDefault();
            let data = JSON.stringify({
                
                name: {
                    value : this.name
                },
                mail: {
                    value: this.email
                },
                
                status: {
                    value: 1
                }
            }) 
            
            axios.post('http://drupal8.docker.localhost:8000/user/register', data);
            this.success = true;
            this.name = ''
            this.email = ''
            console.log('Created new user')
        }
    }
}
</script>

<style>
</style>