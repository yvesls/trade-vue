<template>
    <div>
      <h1>Login e identificação</h1>
      <form class="input-container" @submit.prevent="entrar">
        <label for="cpf">CPF:</label>
        <input v-model="cpf" type="text" id="cpf" name="cpf" required>
        <label for="nome">Nome:</label>
        <input v-model="nome" type="text" id="nome" name="nome" required>
        <label for="investimento">Valor total de investimento:</label>
        <input v-model="investimento" type="number" id="investimento" name="investimento" min="0" step="0.01" required>
        <button type="submit">Entrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cpf: '',
        nome: '',
        investimento: 0,
      };
    },
    methods: {
      entrar() {
    
        console.log('Entrando com CPF:', this.cpf, 'e nome:', this.nome, 'Investimento:', this.investimento);
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
            background-color: #0099ff;
            color: white;
            border: none;
            padding: 10px;
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
        
        .input-container {
            margin-bottom: 20px;
            border-radius: 5px;
        }

        .input-container input {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            outline: none;
            transition: border-color 0.3s ease-in-out;
        }

        .input-container input:focus {
            border-color: #5f9ea0;
        }

        /* Estilo do botão */
        .input-container button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background-color: #5f9ea0;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
        }

        .input-container button:hover {
            background-color: #456268;
        }
</style>
  