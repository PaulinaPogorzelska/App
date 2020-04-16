<template>
<div class="wrapList"> 
    <div class="inputName">
        <input type="text" id="name" required v-model="findByName">
        <label for="name">Type pokemon name:</label>
    </div>
        <div class="wrapCheckbox" :class={slide:checkboxActive}>
            <p @click="checkboxActive=!checkboxActive">Choose type <i class="fas fa-chevron-down"></i></p>
            <label><input type="checkbox" v-model="showAll">show all</label>
            <label v-for="type in pokemonTypes" class="checkbox" :for="type"><input type="checkbox" :value="type" v-model="findCheckBox">{{type}}</label>
        </div>
    </transition>
    <div class="pokemons">
        <SinglePokemon v-for="(pokemon,key) in paginatedData()" :key="key" :pokemon="pokemon"></SinglePokemon>
    </div>
    <button @click="prevPage" :disabled="isDisabledPrev()">Previous</button>
    <button @click="nextPage" :disabled="isDisabledNext()">Next</button>
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
                showAll:true,
                checkboxActive:false,
                pageNumber: 1,
                size:8,
            }
        },
        methods: {
            paginatedData(){
                let start = (this.pageNumber * this.size) - this.size;
                let end = start + this.size;
                return this.filterPokemonList.slice(start, end)
            },
            nextPage(){
                this.pageNumber++
            },
            isDisabledNext(){
               return this.pageNumber >= Math.ceil(this.filterPokemonList.length / this.size)
            },
            prevPage(){
                this.pageNumber--
            },
            isDisabledPrev(){
                return this.pageNumber <= 1
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
            },
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
    .wrapList{
        background-image: url("../../assets/pikachu.jpg");
        background-color: #fed732;
        min-height: 100vh;
        padding:55px 2%;
    }

    .wrapCheckbox{
        height:27px;
        overflow:hidden;
        transition:1s;
        background-color: rgba(254, 215, 50, 0.8);
        width:calc(100% - 2px);
        padding:0 2% 2% 2%;
        border:1px solid gray;
        border-radius:2px;
    }

    .wrapCheckbox p{
        text-align:center;
        line-height:27px;
        margin-bottom:5px;
    }

    .wrapCheckbox label:first-of-type{
        width:25%;
        display:block;
    }

    .checkbox{
        display:inline-block;
        width:25%
    }
    
    .slide{
        transition:1s;
        height:160px;
    }

    .pokemons{
        display:grid;
        grid-template-columns: auto auto;
    }

    .inputName {
        position: relative;
        width: 70%;
        max-width:280px;
        height: 40px;
        line-height: 40px;
    }

    .inputName label {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        color: #aaa;
        transition: 0.2s all;
        cursor: text;
    }

    .inputName input {
        width: 100%;
        background-color:transparent;
        border: 0;
        outline: 0;
        box-shadow: none;
        padding: 5px 0;
        border-bottom: 1px solid #aaa;
        color:rgb(32, 35, 41);
    }
    
    input:focus,
    input:valid{
        border-color: #3b659b;
    }

    input:focus~label,
    input:valid~label {
        font-size: 14px;
        top: -15px;
        color: #3b659b;
    }

    button{
        width:80px;
        margin: 3% 1%;
        padding:5px 0;
        border-radius:20px;
        border:1px solid #3b659b;
    }
@media(min-width:768px){
    .pokemons{
        grid-template-columns: auto auto auto;
    }

    .wrapCheckbox{
        height:35px;
        transition:1s;
    }

    .wrapCheckbox p{
        font-size:17px;
        line-height:35px;
    }

    .slide{
        transition:1s;
        height:170px;
    }

    .inputName{
        height:50px;
        line-height:50px;
    }

    .inputName label{
        font-size:18px;
    }

    button{
        width:120px;
        font-size:17px;
        margin: 3% 1% 0 0;
    }
}

@media(min-width:992px){
     .wrapList{
        padding:65px 4%;
    }

    .inputName{
        margin-bottom:1%;
        margin-left:15%
    }

    .wrapCheckbox{
        width:70%;
        margin:auto;
    }
}

@media(min-width:1025px){
    .pokemons{
        grid-template-columns: auto auto auto auto;
    }
}
</style>