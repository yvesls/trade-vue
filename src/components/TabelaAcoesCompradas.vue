<template>
    <div>
      <h2>Ações compradas</h2>
      <div class="acoes-empresa acoes-container">
        <table>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Quantidade</th>
              <th>Valor Total</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(acao, index) in comprador.acoesCompradas" :key="index">
              <td>{{ acao.empresa }}</td>
              <td>{{ acao.quantidade }}</td>
              <td>{{ acao.valorTotal }}</td>
              <td><button @click="venderAcao(acao)">Vender</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import {mapActions} from 'vuex'

  export default {
    data() {
      return {
      };
    },
    methods: {
      ...mapActions('compradorModule', ['removerAcaoComprada']),
      venderAcao(acao) {
          if(acao.quantidade === 0) {
            return;
          }
          console.log(acao)
          const acoesCompradas = {
              cpf: this.comprador.cpf,
              empresa: acao.empresa,
              quantidade: 1,
          }
          this.$store.dispatch('removerAcaoComprada', acoesCompradas)
      }
    },
    computed: {
      comprador() {
        return this.$store.state.compradorModule.compradorLogado
      },
    }
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
  }

  h1, h2 {
      text-align: center;
  }
  
  table {
    width: 100%;
    background-color: white;
  }

  .acoes-container {
    margin: 20px auto;
    width: 70%;
    border: 1px solid #ccc;
    padding: 10px;
    max-height: 220px;
    overflow-y: auto;
    border-radius: 5px;
  }
  
  .acoes-empresa thead {
    position: sticky;
    top: 0;
    background-color: #ffffff;
  }

  label {
      display: block;
      margin-bottom: 5px;
  }

  input {
      display: block;
      width: 100%;
      margin-bottom: 10px;
  }

  button {
      display: block;
      width: 100%;
      background-color: #202222;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 5px;
  }

  th, td {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: left;
  }

  .compradas {
      color: green;
  }

  .indisponiveis {
      color: red;
  }
  </style>
  