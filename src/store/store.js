import Vue from 'vue';
import Vuex from 'vuex';
import compradorModule from './modules/CompradorModule';
import acoesEmpresasModule from './modules/AcoesEmpresasModule';
import * as getters from './modules/getters';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    getters,
    modules: {
        compradorModule,
        acoesEmpresasModule
    }
})