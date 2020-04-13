import axios from 'axios';
export default {
    state: {
        pokemons: [],
        favouritesPokemons:[]
    },
    getters: {
        getPokemons: state => state.pokemons,
        getFavouritesPokemons: state => state.favouritesPokemons
    },
    mutations: {
        ADD_POKEMON(state, pokemon) {
            state.pokemons.push(pokemon)
        },
        ADD_TO_FAVOURITES(state, pokeId){
            let fav = state.favouritesPokemons.find(el => el.id == pokeId)
            if (!fav) {
            let newFav = state.pokemons.find(el => el.id == pokeId);
            state.favouritesPokemons.push(newFav)
        }
        }
    },
    actions: {
        async fetchSinglePokemon({ commit }, url) {
            const response = await axios.get(url);
            response.data.imageFav = 'src/assets/pokeball1.png'
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