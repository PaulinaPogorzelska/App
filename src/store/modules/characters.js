import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime"
export default {
    state: {
        characters: 'check'
    },
    getters: {
        getCharacters: state => state.characters 
    },
    mutations: {
        SET_CHARACTERS(state, data) {
            state.characters = data
        }
    },
    actions: {
        async fetchCharacters({ commit }) {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon',{
                params:{
                    limit:20,
                    offset:10
                }
            })
            commit('SET_CHARACTERS', response.data)    
        },
    }
}