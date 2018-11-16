import {router} from '../main'
import axios from 'axios'
export default {
  user: {
    authenticated: false
  },

  checkAuth() {
    var a = localStorage.getItem('id_token')
    if(a) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  login(jwt,csrf){
    localStorage.setItem('csrf', csrf)
    localStorage.setItem('id_token', jwt)
    this.user.authenticated = true
  },
  logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem('csrf')
    this.user.authenticated = false
  },

  

  getAuthHeader() {
    return {
      'Content-Type': 'application/hal+json',
      'X-CSRF-Token': +localStorage.getItem('csrf'),
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
}
}