import {router} from '../main'
import axios from 'axios'
export default {
cleanUrl(body){
	//console.log(body.length)
	body=body.replace('src="/','src="http://drupal8.docker.localhost:8000/' )
	body=body.replace('href="http://prfisv.intra.infocamere.it/','href="http://drupal8.docker.localhost:8000/' )
    return body;
  },

  cleanUrlM(body){ //metodo che cicla un array di uri e li pulisce
	for(var i =0;i<body.length;i++){
	body[i].uri=body[i].uri.replace('src="/','src="http://drupal8.docker.localhost:8000/' )
	body[i].uri=body[i].uri.replace('href="http://prfisv.intra.infocamere.it/','href="http://drupal8.docker.localhost:8000/' )}
    return body;
  }
}