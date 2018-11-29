
<template>
 <div>
    <span v-if="user.authenticated">
  
        <button @click="LogOut">Logout</button>
   </span>
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
       LogOut() {
                
                this.name = '';
                this.pass = '';
                this.jwt = '';
                this.csrfToken = '';
                this.logoutToken = '';
                auth.logout();
                console.log('Logged Out !');
                 window.location.reload();
           
        }
    }
}
</script>


