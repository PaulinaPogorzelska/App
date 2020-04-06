import Vue from 'vue';
import Vuex from 'vuex';
import characters from './modules/characters';
import singleCharacter from './modules/single-character';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
    },
    modules: {
        characters,
        singleCharacter
    }

})