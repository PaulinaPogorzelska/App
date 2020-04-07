<template>
<div>   
    <div v-for="(pokemon,key) in getPokemons.results" :key="key">
    <p>{{pokemon.name}}</p>
    <button @click="showDetails(pokemon.url)">Show details</button>
    <p>{{getOnePoke.id}}</p>
    <SinglePokemon :url="pokemon.url"></SinglePokemon>
    </div>
    
</div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import SinglePokemon from './SinglePokemon.vue'
    export default{
        methods:{
            showDetails(url){
                this.$store.dispatch("fetchOnePoke", url);
            }
        },
        components:{
            SinglePokemon
        },
        computed: {
            ...mapGetters(['getPokemons','getOnePoke']),
        },
        created() {
            this.$store.dispatch("fetchPokemons")
        }
    }
</script>

<style scoped>

</style>