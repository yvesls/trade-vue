// src/App.vue
<template>
  <div id="app">
    <router-view />
    <CadastroComprador class="posicionamento-cadastro" />
    <CadastroAcoes class="posicionamento-cadastro" />
  </div>
</template>

<script>
import CadastroAcoes from '@/components/CadastroAcoes.vue';
import CadastroComprador from '@/components/CadastroComprador.vue';

export default {
  components: {
    CadastroAcoes,
    CadastroComprador,
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
</style>
