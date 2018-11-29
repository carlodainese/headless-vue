import {router} from '../main'
import axios from 'axios'
export default {
  user: {
    authenticated: false,
    name: localStorage.getItem('name')
  },

  checkAuth() {
    var a = localStorage.getItem('id_token')
    if(a) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  login(jwt,csrf,log){
    localStorage.setItem('csrf', csrf)
    localStorage.setItem('id_token', jwt)
    localStorage.setItem('log', log)
    this.user.name= localStorage.getItem('name');
    this.user.authenticated = true
  },
  logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem('csrf')
    localStorage.removeItem('log')
    this.user.authenticated = false
  },

  getName(name){
    this.user.name= localStorage.getItem('name');
    },

  getAuthHeader() {
  
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRF-Token': +localStorage.getItem('csrf'),
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    
      }
   },

  setHeader(){
    if(this.user.authenticated) return {
    'Accept' : 'application/hal+json',
                'X-CSRF-Token': +localStorage.getItem('csrf'),
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
    return {
      'Accept' : 'application/hal+json'
    }
  }
}