<template>
<div>   
        <div v-for="pokemon in getCharacters.results" >
         {{pokemon.name}}
         {{pokemon.id}}
         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
        <SingleItem :url="pokemon.url"></SingleItem>
       </div>
</div>
</template>

<script>
    import SingleItem from './CharacterItem.vue'
    import { mapGetters } from 'vuex';
    export default{
        components:{
            SingleItem
        },
        computed: {
            ...mapGetters(['getCharacters']),
        },
        created() {
            this.$store.dispatch("fetchCharacters")
        }
    }
</script>

<style>
</style>