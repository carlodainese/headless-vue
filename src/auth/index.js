import {router} from '../main'
import axios from 'axios'
export default {
  user: {
    authenticated: false,
    name: localStorage.getItem('name')
  },

  checkAuth() { //metodo di controllo di autenticazione
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
  logout() { //pulizia localstorage
    localStorage.removeItem('id_token')
    localStorage.removeItem('csrf')
    localStorage.removeItem('log')
    this.user.authenticated = false
  },

  getName(name){
    this.user.name= localStorage.getItem('name');
    },

  getAuthHeader() { //header per richiesta http per l'utente autenticato
  
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRF-Token': +localStorage.getItem('csrf'),
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    
      }
   },

  setHeader(){ //header per accedere a richieste a seconda se l'utente è autenticato o no
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