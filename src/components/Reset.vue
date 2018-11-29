<template>
  <div class="container">
  <div v-if="!user.authenticated">
    <div class="alert alert-success" v-if="success">
    Instructions have been sent to your email address.
    </div>
    <h4> Procedi per resettare la password </h4>
      <form v-on:submit="Reset"> 
      <label for="">Username:</label>
              <br>
          <input type="text" v-model="name">
          <br>
          <label for="">Email:</label>
              <br>
           <input type="password" v-model="mail">
           <br>
           <label for="">Vecchia password:</label>
              <br>
        <input type="text" v-model="temp_pass">
        <br>
        <label for="">Nuova password:</label>
              <br>
        <input type="text" v-model="new_pass">
      <br>
      <br>
          <button type="submit" class="btn btn-success">Resetta</button>
      </form>
      </div>

       <div v-if="user.authenticated">
        <h3>
                       Sei autenticato, il reset password non è possibile.
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
            mail: '',
            temp_pass : '',
            new_pass:'',
            success: false,
            user: auth.user
        }
    },
    http: {
        headers: {
            'Accept' : 'json',
            'Content-Type' : 'application/json',
          
        }
    },
    methods: {
        Reset: function(e) {
            
            e.preventDefault();
            let data = JSON.stringify({
                
                name: {
                    value : this.name
                },
                mail: {
                    value: this.email
                },
                
                temp_pass: {
                    value: this.temp_pass
                },
                new_pass: {
                    value: this.new_pass
                }
            }) 
            
            axios.post('http://drupal8.docker.localhost:8000/user/lost-password?_format=json', data);
            this.success = true;
            this.name = ''
            this.email = ''
            this.temp_pass = ''
            this.old_pass = ''
            console.log('RESET')
        }
    }
}
</script>

<style>
</style>