export default {
    // vamos utilizar a estrutura de módulos e store
    state: {
        produtos: [
        ],
    },
    getters: {
        total(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        },
    },
    mutations: {
        adicionarProduto(state, payLoad) {
            state.produtos.push(payLoad)
        },
    },
    actions: {
        adicionarProduto(context, payLoad) {
            setTimeout(()=>{
                // trata ai
                context.commit('adicionarProduto', payLoad)
            }, 300)
        }
    }
}