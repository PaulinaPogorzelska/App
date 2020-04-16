<template>
  <div class="wrapSinglePokemon">
    <h3>
      {{this.pokemon.name}}
      <span @click="toogleIsFavourite(pokemon.id)">
        <img src="src/assets/pokeball.png" :class="{favourite: isFavouritePokemon(pokemon.id)}" />
      </span>
    </h3>
    <img :src="this.pokemon.sprites.front_default"/>
    <p>weight<span>{{this.pokemon.weight}}</span> </p>
    <p>height <span>{{this.pokemon.height}}</span></p>
    <p>types <span>{{singlePokeTypes}}</span></p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["pokemon"],
  computed: {
    ...mapGetters(["isFavouritePokemon"]),
    singlePokeTypes(){
      let singlePokeTypes=[]
      this.pokemon.types.forEach(el=> singlePokeTypes.push(el.type.name))
      return singlePokeTypes.join(', ')
    }
  },
  methods: {
    toogleIsFavourite(pokeId) {
      this.$store.commit("TOGGLE_IS_FAVOURITE", pokeId);
    }
  }
};
</script>

<style scoped>
.wrapSinglePokemon {
  width: 49%;
  margin: 0.5%;
  color: rgb(32, 35, 41);
  background-color: #fcf5f5;
  border: 1px solid yellow;
  border-radius: 5px;
 
}

.wrapSinglePokemon h3 {
  position: relative;
  padding-left: 10%;
  background-color: #f7eeec;
  line-height: 40px;
  letter-spacing: 1px;
}

.wrapSinglePokemon h3 span {
  width: 32px;
  height: 32px;
  overflow: hidden;
  display: inline-block;
  position: absolute;
  top: 5px;
  right: 5px;
}

.wrapSinglePokemon h3 img {
  width: 64px;
}

.favourite {
  transform: translateX(-32px);
}

.wrapSinglePokemon h3 + img {
  display: block;
  margin: auto;
}

.wrapSinglePokemon p{
    margin:0 3%;
    border-bottom:1px solid #777;
    line-height:23px;
    font-size:14px;
}

.wrapSinglePokemon p:last-child{
    border:0;
}

.wrapSinglePokemon p span{
    float:right;
    color:#396bba;
    font-weight:600;
}
</style>