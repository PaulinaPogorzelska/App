<template>
<div> 
    <input v-model="findByName" type="text"> FIND POKE</input>
    <div class="wrapCheckbox">
        <label><input type="checkbox" v-model="showAll">show all</label>
        <div v-for="type in pokemonTypes" class="checkbox">
        <label :for="type"><input type="checkbox" :value="type" v-model="findCheckBox">{{type}}</label>
        </div>
    </div>
    <div v-for="pokemon in paginatedData()">{{pokemon.name}}</div>
    <button @click="prevPage">Previous</button>
    <button @click="nextPage">Next</button>
</div>
</template>

<script>
    import { mapGetters } from 'vuex'
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
                this.pageNumber++;
            },
            prevPage(){
                this.pageNumber--;
            }
        },
        computed: {
            ...mapGetters(['getPokemons']),
            filterPokemonList(){
                return this.getPokemons.filter(pokemon =>{
                    let SinglePokemonTypes = []
                    pokemon.types.forEach(el=>SinglePokemonTypes.push(el.type.name))
                    return this.findCheckBox.some(el=> SinglePokemonTypes.includes(el)) && pokemon.name.includes(this.findByName.toLowerCase()) || this.showAll
                })
            }
        },
        created() {
            this.$store.dispatch("fetchPokemons")
        }
    }
</script>

<style scoped>
</style>