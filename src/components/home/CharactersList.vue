<template>
<div>
        <div v-for="pokemon in getCharacters.results">{{pokemon.name}}
        </div>
</div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default{
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