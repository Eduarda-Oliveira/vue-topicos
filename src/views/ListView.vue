<template>
    <div class="list">
        <ul>
            <li v-for="(usuario, index) in usuarios" :key="index">{{usuario.nome}}</li>
        </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import { mapMutations } from 'vuex'
  export default {
      name: 'listView',
      data() {
    
      },
      methods: {
          ...mapMutations(['setAutorizacao']),
          doCreate() {
              axios.get('usuario',
                  {
                     
                  })
                  .then(response => {
                      console.log(response);
                  })
                  .catch(error => console.log(error));
          }
      }
  }
  </script>