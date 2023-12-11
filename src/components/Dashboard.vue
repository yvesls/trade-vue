<template>
  <div>
    <div class="header">
      <h1>Dashboard</h1>
      <span>Comprador Logado: 
        <span v-if="comprador.cpf">{{ comprador.nome }}</span>
        <span v-else>Ninguém</span>
      </span>
    </div>
    <transition name="slide-down">
      <div class="dashboard" :style="{ maxHeight: dashboardHeight }">
        <button @click="toggleDashboard" class="toggle-btn">
          {{ mostrarDashboard ? 'Esconder' : 'Mostrar' }} Dashboard
        </button>
        <table>
          <thead>
            <tr>
              <th colspan="2" id="aba">Valores do Investidor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="comprador.cpf">
              <td>Valor disponível para investimento:</td>
              <td>{{ comprador.investimento-comprador.valorTotalInvestido | dinheiro }}</td>
            </tr>
            <tr v-if="comprador.cpf">
              <td>Valor total investido:</td>
              <td>{{ comprador.valorTotalInvestido | dinheiro }}</td>
            </tr>
          </tbody>
        </table>
        <div class="valores-empresa empresas-container">
          <table>
            <thead>
              <tr>
                <th colspan="2">Valores por Empresa</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(acao, key) in acoesDisponiveis" :key="key">
                <td>{{ acao.empresa }}</td>
                <td>{{ acao.preco * acao.quantidade | dinheiro }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="total-row">
                <td>Somatório Total:</td>
                <td>{{ acoesDisponiveis.reduce((totalSomatorio, acao) => totalSomatorio + (acao.preco * acao.quantidade), 0) | dinheiro }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </transition>

    <div class="dashboard-dados">
      <TabelaAcoesCompradas class="posicionamento-dashboard"/>
      <TabelaAcoesDisponiveis :acoesDisponiveis="acoesDisponiveis" class="posicionamento-dashboard" />
    </div>
  </div>
</template>

<script>
import TabelaAcoesCompradas from '@/components/TabelaAcoesCompradas.vue';
import TabelaAcoesDisponiveis from '@/components/TabelaAcoesDisponiveis.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    TabelaAcoesCompradas,
    TabelaAcoesDisponiveis,
  },
  data() {
    return {
      cpf: '',
      nome: '',
      valorDisponivel: 5000,
      valorTotalInvestido: 1500,
      mostrarDashboard: true,
      dashboardHeight: '40px',
    };
  },
  computed: {
    comprador() {
      return this.$store.state.compradorModule.compradorLogado
    },
    ...mapState('acoesEmpresasModule', ['acoesDisponiveis']),
  },
  methods: {
    toggleDashboard() {
      this.mostrarDashboard = !this.mostrarDashboard; // Alterna a visibilidade do dashboard
      this.dashboardHeight = this.mostrarDashboard ? '40px' : '300px';
    },
    ...mapActions('acoesEmpresasModule', ['carregarEmpresas']),
  },
  created() {
    this.carregarEmpresas();
  },
};
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: -15px;
}

.header span {
  text-decoration-color: #555454;
  font-style: italic;
}

.dashboard-dados {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: max-content;
}

.dashboard-content {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.dashboard {
  color: rgb(26, 26, 26);
  position: fixed;
  bottom: -1px;
  left: 10%;
  width: 80%;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;
  transform: translateY(0);
  z-index: 1;
}

.slide-down-enter-active {
  transition: transform 0.2s ease-in-out;
}

.slide-down-enter {
  max-height: 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
}

th,
td {
  padding: 4px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #5f9ea0;
  color: white;
}

.valores-empresa th {
  background-color: #202222;
}

#aba {
  padding: 10px;
}

.empresas-container {
  max-height: 135px;
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
  color: white;
}

.total-row {
  font-weight: bold;
}

.posicionamento-dashboard {
  width: 50%;
}

.toggle-btn {
  background-color: #202222;
  color: white;
  border: none;
  padding: 5px 5px;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 8px;
}

</style>
