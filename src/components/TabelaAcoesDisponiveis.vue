<template>
    <div>
      <h2>Ações disponíveis</h2>
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
            <td>R$ {{ acao.preco.toFixed(2) }}</td>
            <td><button @click="comprarAcao(index)">Comprar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        acoesDisponiveis: [
          { empresa: 'Petrobras', quantidade: 100, preco: 25.00 },
          { empresa: 'Vale', quantidade: 50, preco: 40.00 },
          { empresa: 'Itaú', quantidade: 0, preco: 30.00 },
        ],
      };
    },
    methods: {
      comprarAcao(index) {
        console.log('Comprando ação:', this.acoesDisponiveis[index]);
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

        form {
            margin: 20px auto;
            width: 500px;
            border: 1px solid #ccc;
            padding: 10px;
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
        }

        table {
            margin: 20px auto;
            width: 500px;
            border-collapse: collapse;
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
  