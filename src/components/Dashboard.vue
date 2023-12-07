<template>
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Resumo do Investidor</h2>
        <p>Nome: {{ nome }}</p>
        <p>CPF: {{ cpf }}</p>
        <p>Investimento Total: R$ {{ investimento.toFixed(2) }}</p>
      </div>
      <TabelaAcoesCompradas />
      <TabelaAcoesDisponiveis />
    </div>
  </template>
  
  <script>
  import TabelaAcoesCompradas from '@/components/TabelaAcoesCompradas.vue';
  import TabelaAcoesDisponiveis from '@/components/TabelaAcoesDisponiveis.vue';
  
  export default {
    components: {
      TabelaAcoesCompradas,
      TabelaAcoesDisponiveis,
    },
    data() {
      return {
        cpf: '',
        nome: '',
        investimento: 0,
      };
    },
  };
  </script>
  
  <style scoped>
   body {
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .dashboard {
            color: white;
            position: fixed;
            bottom: -1px;
            left: 10%;
            width: 80%;
            background-color: #456268;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #5f9ea0;
        }
        .total-row {
            font-weight: bold;
        }
        
        .empresas-container {
            max-height: 150px;
            overflow-y: auto;
        }

        .valores-empresa thead {
            position: sticky;
            top: 0;
            background-color: #f5f5f5;
        }
        .valores-empresa tfoot {
            position: sticky;
            bottom: 0;
            background-color: #202222;
            box-shadow: -2px -1px white;
        }
  </style>
  