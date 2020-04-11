import axios from 'axios';
export default {
    state: {
        pokemons: []
    },
    getters: {
        getPokemons: state => state.pokemons
    },
    mutations: {
        ADD_POKEMON(state, pokemon) {
            state.pokemons.push(pokemon)
        }
    },
    actions: {
        async fetchSinglePokemon({ commit }, url) {
            const response = await axios.get(url);
            commit('ADD_POKEMON', response.data);
        },
        async fetchPokemons({ dispatch }) {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
            let pokemons = response.data.results;
            if (pokemons) {
                pokemons.forEach(pokemon => {
                    dispatch('fetchSinglePokemon', pokemon.url);
                })
            }

        }
    }
}