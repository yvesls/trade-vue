<template>
    <div>
      <h2>Ações disponíveis</h2>
      <div class="acoes-empresa acoes-container">
        <table>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(acao, index) in acoesDisponiveis" :key="index">
              <td>{{ acao.empresa }}</td>
              <td>{{ acao.quantidade }}</td>
              <td>{{ acao.preco | dinheiro }}</td>
              <td v-if="acao.quantidade > 0"><button @click="comprarAcao(acao)" :disabled="!compradorIsOn">Comprar</button></td>
              <td v-else>indisponível</td>
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
        compradorIsOn: false
      };
    },
    methods: {
      ...mapActions('compradorModule', ['adicionarAcaoComprada']),
      comprarAcao(acao) {
          if(acao.quantidade === 0) {
            return;
          }
          let valorParaInvestir = Number(this.comprador.investimento - this.comprador.valorTotalInvestido);
          let valorMenosValorUnitario = valorParaInvestir - Number(acao.preco);
          if(valorMenosValorUnitario < 0) {
            return;
          }

          const acoesCompradas = {
              id: acao.id,
              cpf: this.comprador.cpf,
              empresa: acao.empresa,
              quantidade: Number(acao.quantidade),
              valorUnitario: Number(acao.preco),
          }
          this.$store.dispatch('adicionarAcaoComprada', acoesCompradas)

      },
    },
    props: {
      acoesDisponiveis: {
        type: Array,
        required: true,
      },
    },
    computed: {
      comprador() {
        return this.$store.state.compradorModule.compradorLogado
      },
    },
    watch: {
      comprador(comprador) {
        this.compradorIsOn = false; 
        if(comprador) {
          this.compradorIsOn = true
        }
      },
    },
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
        background-color: #456268;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
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
  