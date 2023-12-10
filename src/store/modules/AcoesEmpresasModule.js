import axios from 'axios';

export default {
  namespaced: true,
  state: {
    acoesDisponiveis: [],
  },
  getters: {
    
  },
  mutations: {
    adicionarEmpresa(state, listaAtualizada) {
        state.acoesDisponiveis = listaAtualizada;
    },
    carregarEmpresas(state, empresas) {
        state.acoesDisponiveis = empresas;
    },
  },
  actions: {
    async adicionarEmpresa({ commit }, payload) {
      try {
        var response = await axios.get('http://localhost:3000/acoesEmpresas');
        if(response) {
          const acoesEmpresas = response.data.find(empresa => empresa.nome === payload.nome);
          if (acoesEmpresas) {
            commit('adicionarEmpresa', response.data);
            return;
          }
        }
        await axios.post('http://localhost:3000/acoesEmpresas', payload);
        response = await axios.get('http://localhost:3000/acoesEmpresas');
        commit('adicionarEmpresa', response.data);

      } catch (error) {
        console.error('Erro ao adicionar uma empresa:', error);
        throw error;
      }
    },
    async carregarEmpresas({ commit }) {
        try {
          const response = await axios.get('http://localhost:3000/acoesEmpresas');
    
          if (response)
            commit('carregarEmpresas', response.data);
        } catch (error) {
          console.error('Erro ao carregar as empresas:', error);
          throw error;
        }
    },
    async atualizarQuantidade({ commit }, payload) {
        try {
          var response = await axios.get(`http://localhost:3000/acoesEmpresas/${payload.id}`);

          if (response.data) {
            const empresaExistente = response.data;
            empresaExistente.quantidade -= payload.quantidade;
            
            await axios.put(`http://localhost:3000/acoesEmpresas/${empresaExistente.id}`, empresaExistente);
            
            response = await axios.get(`http://localhost:3000/acoesEmpresas`);
            commit('acoesEmpresasModule/carregarEmpresas', response.data);
          }
        } catch (error) {
          console.error('Erro ao atualizar a quantidade da empresa:', error);
          throw error;
        }
    },
  },
};
