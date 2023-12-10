<template>
  <div id="app">
    <CadastroComprador class="posicionamento-cadastro" />
    <CadastroAcoes class="posicionamento-cadastro" />
    
    <Dashboard id="posicionamento-dashboard" />
  </div>
</template>

<script>
import CadastroAcoes from '@/components/CadastroAcoes.vue';
import CadastroComprador from '@/components/CadastroComprador.vue';
import Dashboard from '@/components/Dashboard.vue';

export default {
  components: {
    CadastroAcoes,
    CadastroComprador,
    Dashboard,
  },
};
</script>

<style>
  #app {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    min-height: max-content;
  }

  .posicionamento-cadastro {
    width: 50%;
  }

  #posicionamento-dashboard {
    width: 100%;
  }

</style>
