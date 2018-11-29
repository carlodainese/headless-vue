<template>
  <div class="container">
  <div v-if="!user.authenticated">
      <h2>Registrazione</h2>
      <div class="alert alert-success" v-if="success">
          Registrazione effettuata!
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
       <br>
          <button type="submit" class="btn btn-success">Create User</button>
      </form>
      </div>
        <div v-if="user.authenticated">
        <h3>
                       Sei autenticato, effetua il logout per registrare un nuovo account.
                    </h3>
        </div>
  </div>
</template>

<script>
import auth from '../auth'
export default {
    data() {
        return {
            name: '',
            email: '',
            success: false,
            user: auth.user

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