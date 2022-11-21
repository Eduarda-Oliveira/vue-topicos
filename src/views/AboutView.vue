<template>
  <div class="about">
      <p>Nome: <input type="text" v-model="nome"/></p>
      <p>Senha: <input type="password" v-model="senha"/></p>
      <p>Autorização: <input type="text" v-model="autorizacao"/></p>
      <p>{{status}}</p>
      <button @click="doCreate">Ok</button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
    name: 'aboutView',
    data() {
        return {
            nome: '',
            senha: '',
            autorizacao: '',
            status: ''
        }
    },
    methods: {
        ...mapMutations(['setAutorizacao']),
        doCreate() {
            axios.post('usuario',
                {
                    nome: this.nome,
                    senha: this.senha,
                    autorizacao: this.autorizacao
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => console.log(error));
            this.status = this.nome + ' - ' + this.senha + '-' + this.autorizacao;
        }
    }
}
</script>