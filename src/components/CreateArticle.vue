<template>
    <div class="editor expecial">
        
        <div class="row">
            <div class="col-md-8 col-md-offset-2 edit">
                <div class="usersmember-h3">
                    <h3>
                        Create Article
                    </h3>
                </div>
                <form method="POST" @submit.prevent="articlesub" class="setting" accept-charset="UTF-8">
                    <div class="form-group">
                        <label for="title" class="control-label">Title:</label>
                        <input v-model="article.title" id="title" name="title" type="text" class="form-control" required="required">
                    </div>
                    <div class="form-group">
                        <label for="body" class="control-label">Body:</label>
                        <input v-model="article.body" id="body" name="body" type="text" class="form-control" required="required">
                    </div>
                     <div class="col-md-12">
                            <input class="btn btn-primary form-control letter-spcing" type="submit" value="Create">
                        </div>
                    
                </form>
            </div>
        </div>
    </div>

</template>



<script>
import auth from '../auth'
import axios from 'axios'
    export default{
      data() {
        return {
          editor: null,
          article:{
            body:'',
            title:''
          },
          type: ''

        }
      },
     
      beforeDestroy() {
            if(this.editor) {
                 this.editor.destroy();
            }
      },
      methods:{
          articlesub(){
           let data = JSON.stringify({
                
        _links:{type:{href:"http://drupal8.docker.localhost:8000/rest/type/node/article"}
                },
                 type: {target_id: "article"},
        title: {
        value: this.article.title
        },
        body: {
        value: this.article.body
        }
        });
  axios.post('http://drupal8.docker.localhost:8000/ entity/node?_format=hal_json', data,
                {headers:
                  auth.getAuthHeader()
              }).then((response)=>{
                console.log('DONE');
            })
          }
      }
  
    }
</script>