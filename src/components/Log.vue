
<template>

  <div>
    <div v-if="!isLoggedIn">
        <h3>Login</h3>
        <input type="text" v-model="name">
        <input type="password" v-model="pass">
        <br>
        <button @click="LogIn">Login</button>
    </div>
    
    <div v-if="isLoggedIn">
        Hello {{this.name}}
        <br>
        <button @click="LogOut">Logout</button>
   </div>
  </div>
</template>

<script>
import { router } from '../main';
import auth from '../auth'
import axios from 'axios'
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
            isLoggedIn: false,
        }
    },
    http: {
        headers: {
            'Accept' : 'json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': 'U1rd59lpFYzcoZqqdmu-ZlHvUW_ioTkL55rqwvjhlck'
        }
    },
    checkAuth() {
    this.jwt = localStorage.getItem('id_token')
    if(this.jwt) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  },

    methods: {
    getJWT(){this.$http.get('http://drupal8.docker.localhost:8000/jwt/token?_format=json',{ headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token':this.csrfToken,
                    }})
            .then(response => {
             this.jwt = response.data.token;
            console.log('JWTTT');
            console.log('this.jwt');});
            },

        LogIn(){
        
            let data = JSON.stringify({
                name: this.name,
                pass: this.pass
            });
            axios.post(this.urlIn , data, {
                headers: {
                    'Content-Type': 'application/json',
                   },
                }
            )
            .then(response => {
                this.response = response.data;
                this.csrfToken = response.data.csrf_token;
                this.logoutToken = response.data.logout_token;
                 
                console.log(this.logoutToken)
                
                {this.$http.get('http://drupal8.docker.localhost:8000/jwt/token?_format=json',{ headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': this.csrfToken,
                    'Authorization' : 'Basic YWRtaW46YWRtaW4='
                    }})
            .then(response => {
             this.jwt = response.data.token;
             localStorage.setItem('id_token', response.data.token);

        this.isLoggedIn = true;

            console.log('JWTTT');
            console.log(this.jwt);});
            }
            });
            console.log('Logged In !');
            auth.login(this, credentials, 'create')
            
        },

        LogOut() {
            this.$http.get('http://drupal8.docker.localhost:8000/user/logout?_format=json', {
                credentials: "same-origin",
                    headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': 'U1rd59lpFYzcoZqqdmu-ZlHvUW_ioTkL55rqwvjhlck',
                    },
                }
            );
            this.name = ''
            this.pass = ''
            localStorage.removeItem('id_token')
            this.isLoggedIn = false
            console.log('Logged Out !');
        }
    }
}
</script>

<style>