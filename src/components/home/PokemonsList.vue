<template>
<div>   
    <input v-model="searchName" type="text"> FIND POKE</input>
    <button @click="show=true">Chose type</button>
    <div v-if="show" class="x"></div>
    <div v-for="pokemon in filterByName">{{pokemon.name}}
    <img :src="pokemon.sprites.front_default">
    </div>
    
</div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default{
        data(){
            return{
                show:false,
                searchName:""
            }
        },
        computed: {
            ...mapGetters(['getPokemons']),
            filterByName(){
                return this.getPokemons.filter(pokemon =>{
                    return pokemon.name.includes(this.searchName.toLowerCase())
                })
            }
        },
        created() {
            this.$store.dispatch("fetchPokemons")
        }
    }
</script>

<style scoped>
    input{
        margin: 20px;
        width:200px;
        height:26px;
    }

    .x{
        widht:100px;
        height:100px;
        background-color:black;
    }
</style>