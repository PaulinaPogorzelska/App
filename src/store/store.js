import Vue from 'vue';
import Vuex from 'vuex';
import characters from './modules/characters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
    },
    modules: {
        characters
    }

})