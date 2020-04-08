<template>
<div>   
    <div v-for="pokemon in getPokemons">{{pokemon.name}} {{pokemon.id}}</div>
    
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