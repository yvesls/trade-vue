import Vue from 'vue'
import Vuex from 'vuex'
import exemplo from './modules/exemploComponente'
import parametros from './modules/parametros'
import * as getters from './modules/getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nome: 'Saci',
        sobrenome: 'Perêrê'
    },
    getters,
    modules: {
        exemplo,
        parametros
    }
})