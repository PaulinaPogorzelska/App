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
        async fetchCharacters({ commit }) {
            let pokemonsArray=[];
            for(let i=1; i<20; i++){
                const url=`https://pokeapi.co/api/v2/pokemon/${i}`;
                const response = await axios.get(url)
                pokemonsArray.push(response.data)
            } 
            commit('SET_POKEMONS', pokemonsArray)   
        },
    }
}