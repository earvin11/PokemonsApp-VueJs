<template>
  <div class="pokemon-container">
    
    <!-- Solo muestras esto si (v-if) la propiedad showPokemon es false -->
    <img v-if="!showPokemon" 
      :src="imgSrc" 
      class="hidden-pokemon"  
      alt="pokemon">
    
    <!-- Sino muestra esto (v-else) -->
    <img v-else 
      :src="imgSrc"
      class="fade-in"
      alt="pokemon">

  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
    }
  }
}
</script>

<style scoped>
/* Pokemon Picture */
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}

</style>