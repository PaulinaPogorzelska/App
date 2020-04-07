<template>
<div>   
    <div v-for="(pokemon,key) in getPokemons.results" :key="key">{{pokemon.url}}</div>
    
</div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default{
        computed: {
            ...mapGetters(['getPokemons']),
        },
        created() {
            this.$store.dispatch("fetchPokemons")
        }
    }
</script>

<style scoped>

</style>