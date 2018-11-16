
<template>
 <div>
    <div v-if="!user.authenticated">
        <h3>Login</h3>
        <input type="text" v-model="name">
        <input type="password" v-model="pass">
        <br>
        <button @click="LogIn">Login</button>
        <router-link v-bind:to="reset-password">Hai dimenticato la password?</router-link>
    </div>
    
    <div v-if="user.authenticated">
        Hello {{this.name}}
        <br>
        <button @click="LogOut">Logout</button>
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
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': 'U1rd59lpFYzcoZqqdmu-ZlHvUW_ioTkL55rqwvjhlck'
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
           
            console.log('JWTTT');
            auth.login(this.jwt, this.csrfToken);
           });
            }
            });
            console.log('Logged In !');
           
        },

   

        LogOut() {
            axios.post('http://drupal8.docker.localhost:8000/user/logout?_format=json', {
                credentials: "same-origin",
                    headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': this.csrfToken,

                    },
                }
            );
            this.name = ''
            this.pass = ''
            auth.logout();
            console.log('Logged Out !');
        }
    }
}
</script>

<style>