<template>
  <h1>Quien es este Pokemon?</h1>

  <!-- img -->
    <PokemonPicture :pokemonId="4" :showPokemon="true" />
  <!-- opciones -->
    <PokemonOptions />


</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

// console.log(getPokemonOptions())

export default {
  components: { 
    PokemonPicture,
    PokemonOptions 
},

}
</script>

<style>

</style>