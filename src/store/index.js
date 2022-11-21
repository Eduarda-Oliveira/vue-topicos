//onde ficam as variaveis e metodos de acesso globais, transparentes para toda a aplicação
import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null,
    usuario: null,
    autorizacao: 'ROLE_USER'    
  },
  getters: {
  },
  mutations: { //equivalente a um setter, com a diferença de que alem do token recebe o state
    setToken(state, token){
      state.token = token;
    }, 
    seUsuario(state, usuario){
      state.usuario = usuario;
    },
    setAutorizacao(state, autorizacao) {
      state.autorizacao = autorizacao;
    },
    Logout(state){
      state.token = null;
      state.usuario = null;
      state.autorizacao = 'ROLE_USER';
    }
  },
  actions: {
  },
  modules: {
  }
})