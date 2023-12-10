<template>
  <div>
    <h1>Cadastro de Ações</h1>
    <form class="input-container" @submit.prevent="cadastrarAcao">
      <label for="nome">Nome da empresa:</label>
      <input v-model="empresa" type="text" id="empresa" name="empresa" required>
      <label for="quantidade">Quantidade de ações a serem vendidas:</label>
      <input v-model="quantidade" type="number" id="quantidade" name="quantidade" min="1" required>
      <label for="preco">Preço unitário da ação:</label>
      <input v-model="preco" type="number" id="preco" name="preco" min="1" step="1" required>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
 import {mapActions} from 'vuex'

export default {
  data() {
    return {
      empresa: '',
      quantidade: 1,
      preco: 10,
    };
  },
  methods: {
    ...mapActions('acoesEmpresasModule', ['adicionarEmpresa']),
    cadastrarAcao() {
        const empresa = {
            empresa: this.empresa,
            quantidade: Number(this.quantidade),
            preco: Number(this.preco),
        }
        this.adicionarEmpresa(empresa)
    },
  },
};
</script>

<style scoped>
 body {
            font-family: Arial, sans-serif;
        }

        h1 {
            text-align: center  ;
        }

        form {
            margin: 20px auto;
            width: 80%;
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
