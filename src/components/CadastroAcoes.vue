<template>
  <div>
    <h1>Cadastro de Ações</h1>
    <form class="input-container" @submit.prevent="cadastrarAcao">
      <label for="nome">Nome da empresa:</label>
      <input v-model="nome" type="text" id="nome" name="nome" required>
      <label for="quantidade">Quantidade de ações a serem vendidas:</label>
      <input v-model="quantidade" type="number" id="quantidade" name="quantidade" min="1" required>
      <label for="preco">Preço unitário da ação:</label>
      <input v-model="preco" type="number" id="preco" name="preco" min="0.01" step="0.01" required>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: '1',
      quantidade: 0,
      preco: 0.01,
    };
  },
  methods: {
    cadastrarAcao() {
      console.log('Ação cadastrada:', this.nome, this.quantidade, this.preco);
    },
  },
};
</script>

<style scoped>
 body {
            font-family: Arial, sans-serif;
        }

        h1 {
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
            width: 95.5%;
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
