import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime"
export default {
    state: {
        onePoke: 'checkSingle'
    },
    getters: {
        getOnePoke: state => state.onePoke
    },
    mutations: {
        SET_ONE_POKE(state, data) {
            state.onePoke = data
        }
    },
    actions: {
        async fetchOnePoke({ commit },url) {
            const response = await axios.get(url)
            commit('SET_ONE_POKE', response.data)
            console.log(url)    
        },
    }
} 