<template>
  <div id="app">
    <CadastroAcoes />
    <CadastroComprador />
    <Dashboard />
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
/* Add your global styles here */
</style>
