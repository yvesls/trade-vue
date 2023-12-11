import Vue from 'vue';
import Vuex from 'vuex';
import compradorModule from './modules/CompradorModule';
import acoesEmpresasModule from './modules/AcoesEmpresasModule';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    modules: {
        compradorModule,
        acoesEmpresasModule
    }
})