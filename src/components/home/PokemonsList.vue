<template>
<div>   
    <input type="checkbox" value="poison" v-model="findCheckBox"></input>
    <div v-for="pokemon in filterByBox">{{pokemon.name}}{{pokemon.id}}</div>
</div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default{
        data(){
            return{
                array1:[1,2,3],
                array2:[2,4],
                findCheckBox:[]
            }
        },
        methods: {
        },
        computed: {
            ...mapGetters(['getPokemons']),
            filterByBox(){
                return this.getPokemons.filter(pokemon =>{
                    let SinglePokemonTypes = []
                    pokemon.types.forEach(function(entry){SinglePokemonTypes.push(entry.type.name)})
                    const found = this.findCheckBox.some(r=> SinglePokemonTypes.includes(r))
                    return found
                })
            }
        },
        created() {
            this.$store.dispatch("fetchPokemons")
        }
    }
</script>

<style scoped>
    .name{
        margin: 20px;
        width:200px;
        height:26px;
    }

    .x{
        widht:100px;
        height:100px;
        background-color:black;
        color:white;
    }
</style>