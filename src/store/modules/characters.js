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
            let pokeArray=[]
            console.log(pokeArray)
            commit('SET_POKEMONS', pokeArray)
            function fetchPokemonData(pokemon){
                let url = pokemon.url
                  fetch(url)
                  .then(response => response.json())
                  .then(function(pokeData){
                    pokeArray.push(pokeData)
                  })
                }
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/',{
                params:{
                    limit:20,
                    offset:0
                }
            }).then(response => response.data).then(function(allpokemon){
                allpokemon.results.forEach(function(pokemon){fetchPokemonData(pokemon)})
            })
        }
    }
}