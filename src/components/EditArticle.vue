<template>
    <div class="editor expecial">
        
        <div class="row">
            <div class="col-md-8 col-md-offset-2 edit">
                <div class="usersmember-h3">
                    <h3>
                        Edit di un contenuto
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

                    <div class="form-group " style="margin-top: 40px">
                        <div class="col-md-12">
                            <input class="btn btn-primary form-control letter-spcing" type="submit" value="Update">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<style>
    .panel-body{
        padding:0;
    }
</style>

<script>

    export default{
      data() {
        return {
          editor: null,
          article:{
             body:'',
             title:'',
          },
        }
      },
  
      methods:{
        articlesub(){
            this.article.body=this.editor.getContent();
            this.$http.post('http://drupal8.docker.localhost:8000/node/'+this.$route.params.id+'edit',this.article,{headers: {
                    'Content-Type': 'application/hal+json',
                    'X-CSRF-Token' : '6NBX6-IVNuQ-uDNotBr-YdyNTMyvhZJ3mvgv-yehJHg',
                    'Authorization' : 'Basic YWRtaW46YWRtaW4='
              }}).then((response)=>{
                this.$router.push('/');
                 toastr.success('You update the article success!')
            })
        }
      }
    }
</script>