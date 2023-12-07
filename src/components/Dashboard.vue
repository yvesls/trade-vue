<template>
  <div>
    <div class="header">
      <h1>Dashboard</h1>
    </div>
    <div class="dashboard-content">
      <div class="resumo">
        <h2>Resumo do Investidor</h2>
        <p>Nome: {{ nome }}</p>
        <p>CPF: {{ cpf }}</p>
        <p>Investimento Total: R$ {{ investimento.toFixed(2) }}</p>
      </div>
      <TabelaAcoesCompradas :acoes="acoesCompradas" @venderAcao="venderAcao" />
    </div>
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
      acoesCompradas: [
        {
          empresa: 'Itaú',
          quantidade: 10,
          valor: 'R$ 300,00',
          comprada: true
        }
        // Adicione mais ações compradas conforme necessário
      ]
    };
  },
  methods: {
    venderAcao(index) {
      // Lógica para vender ação
      this.acoesCompradas.splice(index, 1);
    }
  }
};
</script>

<style scoped>
/* Estilos como antes */

.header {
  text-align: center;
  margin-bottom: 20px;
}

.dashboard-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.resumo {
  margin-right: 20px;
}

</style>
