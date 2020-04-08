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
        fetchPokemons({ commit }){
            function fetchPokemonData(pokemon){
                let url = pokemon.url
                  fetch(url)
                  .then(response => response.json())
                  .then(function(pokeData){
                  console.log(pokeData)
                  })
                }
                fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
                 .then(response => response.json())
                 .then(function(allpokemon){
                 allpokemon.results.forEach(function(pokemon){
                   fetchPokemonData(pokemon); 
                 })
                })
        }    
    }
}