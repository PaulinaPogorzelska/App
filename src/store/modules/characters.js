import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime"
export default {
    state: {
        pokemons: 'check'
    },
    getters: {
        getPokemons: state => state.pokemons
    },
    mutations: {
        SET_POKEMONS(state, data) {
            state.pokemons= data
        }
    },
    actions: {
        async fetchPokemons({ commit }){
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/',{
                params:{
                    limit:20,
                    offset:0
                }
            })
            commit('SET_POKEMONS', response.data)   
        }
    }
}