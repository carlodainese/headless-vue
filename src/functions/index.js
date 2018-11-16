import {router} from '../main'
import axios from 'axios'
export default {
cleanUrl(body){
	//console.log(body.length)
	body=body.replace('src="/','src="http://drupal8.docker.localhost:8000/' )
    return body
  }
}