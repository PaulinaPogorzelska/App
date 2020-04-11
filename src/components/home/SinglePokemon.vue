<template>
<div class="wrapSinglePokemon">
    <h2>{{this.pokemon.name}}</h2>
    <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.pokemon.id +'.png'"><img>
</div>
</template>

<script>
    export default{
        props:['pokemon']
    }
</script>

<style scoped>
    .wrapSinglePokemon{
        width:40%;
        background-color:white;
        
    }

</style>