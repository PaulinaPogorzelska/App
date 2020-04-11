<template>
<div> 
    <input v-model="findByName" type="text"> FIND POKE</input>
    <div class="wrapCheckbox">
        <label><input type="checkbox" v-model="showAll">show all</label>
        <div v-for="type in pokemonTypes" class="checkbox">
        <label :for="type"><input type="checkbox" :value="type" v-model="findCheckBox">{{type}}</label>
        </div>
    </div>
    <SinglePokemon v-for="(pokemon,key) in paginatedData()" :key="key" :pokemon="pokemon"></SinglePokemon>
    <button @click="prevPage">Previous</button>
    <button @click="nextPage">Next</button>
</div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import SinglePokemon from './SinglePokemon.vue'
    export default{
        data(){
            return{
                pokemonTypes:['normal','fire','fighting','water','flying','grass','poison','electric','ground','psychic','rock','ice',
                'bug','dragon','ghost','dark','steel','fairy'],
                findCheckBox:[],
                findByName:'',
                showAll:'true',
                pageNumber: 0,
                size:5,
            }
        },
        methods: {
            paginatedData(){
                let start = this.pageNumber * this.size;
                let end = start + this.size;
                return this.filterPokemonList.slice(start, end)
            },
            nextPage(){
                if(this.pageNumber + 1 < this.filterPokemonList.length / this.size){
                    this.pageNumber++
                }
            },
            prevPage(){
                if(this.pageNumber>0){this.pageNumber--;}
            }
        },
        computed: {
            ...mapGetters(['getPokemons']),
            filterPokemonList(){
                return this.getPokemons.filter(pokemon =>{
                    let SinglePokemonTypes = []
                    pokemon.types.forEach(el=>SinglePokemonTypes.push(el.type.name))
                    return pokemon.name.includes(this.findByName.toLowerCase()) && (this.showAll || this.findCheckBox.some(el=> SinglePokemonTypes.includes(el)))
                })
            }
        },
        components:{
            SinglePokemon
        },
        created() {
            this.$store.dispatch("fetchPokemons")
        },
    }
</script>

<style scoped>
    .wrapCheckbox{
        width:507px;
        hirght:150px;
    }
        .checkbox{
        display:inline-block;
        width:80px;
    }
</style>