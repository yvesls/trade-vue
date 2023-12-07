<template>
    <div>
      <h2>Ações compradas</h2>
      <table>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(acao, index) in acoes" :key="index" :class="{ 'compradas': acao.comprada, 'indisponiveis': !acao.comprada }">
            <td>{{ acao.empresa }}</td>
            <td>{{ acao.quantidade }}</td>
            <td>{{ acao.valor }}</td>
            <td><button @click="venderAcao(index)" :disabled="!acao.comprada">Vender</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        acoes: [
          {
            empresa: 'Itaú',
            quantidade: 10,
            valor: 'R$ 300,00',
            comprada: true
          }
          // Adicione mais ações conforme necessário
        ]
      };
    },
    methods: {
      venderAcao(index) {
        // Lógica para vender a ação, por exemplo, remover da lista
        this.acoes.splice(index, 1);
      }
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
            background-color: #202222;
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
  