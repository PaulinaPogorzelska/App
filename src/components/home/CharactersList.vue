<template>
<div>   
    <div>{{getPokemons}}</div>
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
            ...mapGetters(['getPokemons']),
        },
        created() {
            this.$store.dispatch("fetchCharacters")
        }
    }
</script>

<style>
</style>