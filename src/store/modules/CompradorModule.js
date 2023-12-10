import axios from 'axios';
import acoesEmpresasModule from './AcoesEmpresasModule';

export default {
  state: {
    compradorLogado: {},
  },
  getters: {
    totalInvestido: (state) => {
      return state.compradorLogado.acoesCompradas.reduce((total, acao) => total + acao.valorTotal, 0);
    },
    disponivelParaInvestir: (state, getters) => {
      const investimento = parseFloat(state.investimento);
      const totalInvestido = getters.totalInvestido;
      return investimento - totalInvestido;
    }
  },
  mutations: {
    adicionarComprador(state, novoComprador) {
      state.compradorLogado = novoComprador;
    },
  },
  actions: {
    async adicionarComprador({ commit }, payload) {
      try {
        const response = await axios.get('http://localhost:3000/compradores');
        if(response) {
          const compradorExistente = response.data.find(comprador => comprador.cpf === payload.cpf);
          if (compradorExistente) {
            commit('adicionarComprador', compradorExistente);
            return;
          }
        }
        const novoComprador = await axios.post('http://localhost:3000/compradores', payload);
        commit('adicionarComprador', novoComprador.data);
        
      } catch (error) {
        console.error('Erro ao adicionar/logar um comprador:', error);
        throw error;
      }
    },
    async adicionarAcaoComprada({ commit }, payload) {
      try {
        const response = await axios.get('http://localhost:3000/compradores');
        if(response) {
          const compradorExistente = response.data.find(comprador => comprador.cpf === payload.cpf);
          
          if (compradorExistente) {
            if(compradorExistente.acoesCompradas === undefined) {
              compradorExistente.acoesCompradas = [
                {
                  empresa: '',
                  quantidade: 0,
                  valorTotal: 0
                }
              ]
            }
            const acaoExistente = compradorExistente.acoesCompradas.find(
              acao => acao.empresa === payload.empresa
            );
              
            if (acaoExistente) {
              acaoExistente.quantidade += 1;
              acaoExistente.valorTotal += payload.valorUnitario;
            } else {
              if(compradorExistente.acoesCompradas[0].empresa === '') {
                compradorExistente.acoesCompradas.shift();
              }
              compradorExistente.acoesCompradas.push({
                empresa: payload.empresa,
                quantidade: 1,
                valorTotal: payload.valorUnitario
              });
            }
            compradorExistente.valorTotalInvestido = compradorExistente.acoesCompradas.reduce((total, acao) => total + acao.valorTotal, 0);
            await axios.put(`http://localhost:3000/compradores/${compradorExistente.id}`, compradorExistente);
            commit('adicionarComprador', compradorExistente);
            await acoesEmpresasModule.actions.atualizarQuantidade({ commit }, { id: payload.id, quantidade: 1 });
          }
        } else {
            console.error('Erro ao adicionar ação comprada. Comprador não encontrado no banco');
        }
      } catch (error) {
        console.error('Erro ao adicionar ação comprada:', error);
        throw error;
      }
    },
    async removerAcaoComprada({ commit }, payload) {
      try {
        const response = await axios.get('http://localhost:3000/compradores');
        if(response) {
          const compradorExistente = response.data.find(comprador => comprador.cpf === payload.cpf);
          
          if (compradorExistente) {
            const acaoExistente = compradorExistente.acoesCompradas.find(
              acao => acao.empresa === payload.empresa
            );
            const acaoEmpresa = await axios.get(`http://localhost:3000/acoesEmpresas?empresa=${payload.empresa}`);
            
            if(acaoExistente.quantidade - 1 === 0) {
              compradorExistente.valorTotalInvestido -= Number(acaoEmpresa.data[0].preco);
              const indiceParaRemover = compradorExistente.acoesCompradas.findIndex(
                acao => acao.empresa === acaoExistente.empresa
              );
            
              if (indiceParaRemover !== -1) {
                compradorExistente.acoesCompradas.splice(indiceParaRemover, 1);
              }
              await axios.put(`http://localhost:3000/compradores/${compradorExistente.id}`, compradorExistente);
              commit('adicionarComprador', compradorExistente);
              await acoesEmpresasModule.actions.atualizarQuantidade({ commit }, { id: Number(acaoEmpresa.data[0].id), quantidade: -1 });
              return;
            }
            
            acaoExistente.quantidade -= Number(payload.quantidade);
            acaoExistente.valorTotal -= Number(acaoEmpresa.data[0].preco);

            compradorExistente.valorTotalInvestido -= Number(acaoEmpresa.data[0].preco);
            await axios.put(`http://localhost:3000/compradores/${compradorExistente.id}`, compradorExistente);
            commit('adicionarComprador', compradorExistente);

            await acoesEmpresasModule.actions.atualizarQuantidade({ commit }, { id: Number(acaoEmpresa.data[0].id), quantidade: -1 });
          }
        } else {
            console.error('Erro ao adicionar ação comprada. Comprador não encontrado no banco');
        }
      } catch (error) {
        console.error('Erro ao adicionar ação comprada:', error);
        throw error;
      }
    },
  },
};
