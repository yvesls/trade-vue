<template>
  <div id="app">
    <MenuPrincipal />
    <CadastroAcoes />
    <CadastroComprador />
    <Dashboard />
  </div>
</template>

<script>
import CadastroAcoes from '@/components/CadastroAcoes.vue';
import CadastroComprador from '@/components/CadastroComprador.vue';
import Dashboard from '@/components/Dashboard.vue';
import MenuPrincipal from '@/components/MenuPrincipal.vue';

export default {
  components: {
    CadastroAcoes,
    CadastroComprador,
    Dashboard,
    MenuPrincipal,
  },
};
</script>

<style>
/* Add your global styles here */
</style>
