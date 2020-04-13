<template>
<div class="wrapSinglePokemon">
    <h3>{{this.pokemon.name}}<span @click="addToFav(pokemon.id)"><img :src="pokemon.imageFav"></span></h3>
    <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.pokemon.id +'.png'"><img>
</div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default{
        props:['pokemon'],
        computed:{
            ...mapGetters(['getFavouritesPokemons'])
        },
        methods: {
            addToFav(pokeId){
                this.$store.commit('ADD_TO_FAVOURITES', pokeId)
                console.log(this.getFavouritesPokemons)
                let check = this.getFavouritesPokemons.some(el=> el.id == this.pokemon.id)
                if(check){
                    this.pokemon.imageFav ='src/assets/pokeball2.png'
                }
            }
        }
    }
</script>

<style scoped>
    .wrapSinglePokemon{
        width:49%;
        margin:0.5%;
        color:rgb(32, 35, 41);
        background-color:#fcf5f5;
        border: 1px solid yellow;
        border-radius:5px;
        float:left;
    }

    .wrapSinglePokemon h3{
        position:relative;
        padding-left:10%;
        background-color:#f7eeec;
        line-height:40px;
        letter-spacing:1px;
    }
    
    .wrapSinglePokemon h3 span{
        width:32px;
        height:32px;
        overflow:hidden;
        display:inline-block;
        position:absolute;
        top:5px;
        right:5px;

    } 

    .wrapSinglePokemon h3 img{
        width:32px;
    } 

    .favourite{
         transform: translateX(-32px);
    }

    .wrapSinglePokemon h3+img{
        display:block;
        margin:auto;
    }

</style>