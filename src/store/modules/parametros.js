export default {
    state: {
        quantidade: 1,
        preco: 9.8,
    },
    mutations: {
        setQuantidade(state, payLoad) {
            state.quantidade = payLoad
        },
        setPreco(state, payLoad) {
            state.preco = payLoad
        }
    },
}