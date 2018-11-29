
<template>
 <div>
    <div v-if="!user.authenticated">
          
        <input type="text" v-model="name">
        <input type="password" v-model="pass">
      
        <button @click="LogIn">Login</button>
        <br>
        <a href="/reset-password">Hai dimenticato la password?</a>
        <a href="/register">Registrati!</a>
    
    </div>
  </div>
</template>

<script>
import auth from '../auth'
import axios from 'axios'
import {router} from '../main';

export default {
    
    data() {
        return {
            name: this.name,
            pass: this.pass,
            jwt: '',
            urlIn: 'http://drupal8.docker.localhost:8000/user/login?_format=json',
            urlOut: 'http://drupal8.docker.localhost:8000/user/logout?_format=json',
            csrfToken: '',
            logoutToken: '',
            user: auth.user
      
            
        }
    },
    http: {
        headers: {
            'Accept' : 'json',
            'Content-Type': 'application/json'
        }
    },

  


   methods: {

    LogIn(){
        let data = JSON.stringify({
                name: this.name,
                pass: this.pass
            });
            axios.post(this.urlIn , data, {
                headers: {
                    'Content-Type': 'application/json',
                     'Accept': 'application/json',
                   },
                }
            )
            .then(response => {
                this.response = response.data;
                this.csrfToken = response.data.csrf_token;
                this.logoutToken = response.data.logout_token;
                this.name = response.data.current_user.name;
                localStorage.setItem('name', this.name)
                auth.getName(this.name);
                {this.$http.get('http://drupal8.docker.localhost:8000/jwt/token?_format=json',{ headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': this.csrfToken,
                    'Authorization' : 'Basic aWxlbjppbGVu='
                    }})
            .then(response => {
             this.jwt = response.data.token;
            console.log('JWT');
            auth.login(this.jwt, this.csrfToken,this.logoutToken);
             window.location.reload();
         });
            }
            });
            console.log('Logged In !');
            
           
        },

    
}
}
</script>


