  
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime"
export default {
    state: {
        pokemons: [],
    },
    getters: {
        getPokemons: state => state.pokemons,
        isFavouritePokemon: state => pokemonId => state.pokemons.find(el => el.id == pokemonId).isFavourite
    },
    mutations: {
        ADD_POKEMON(state, pokemon) {
            state.pokemons.push(pokemon)
        },
        TOGGLE_IS_FAVOURITE(state, pokemonId) {
            let pokemons = [...state.pokemons];
            let pokemon = pokemons.find(el => el.id == pokemonId)
            if (pokemon) {
                pokemon.isFavourite = !pokemon.isFavourite;
                state.pokemons = [...pokemons];
            }
        }
    },
    actions: {
        async fetchSinglePokemon({ commit }, url) {
            const response = await axios.get(url);
            response.data.isFavourite = false
            commit('ADD_POKEMON', response.data);
        },
        async fetchPokemons({ dispatch }) {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=70');
            let pokemons = response.data.results;
            if (pokemons) {
                pokemons.forEach(pokemon => {
                    dispatch('fetchSinglePokemon', pokemon.url);
                })
            }

        }
    }
}