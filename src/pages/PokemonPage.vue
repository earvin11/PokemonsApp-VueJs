<template>
  
  <!-- Si pokemon es null o false muestra esto -->
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <!-- Si no, (pokemon === true) renderiza esto -->
  <div v-else>
    <h1>Quien es este Pokemon?</h1>
  
    <!-- img -->
    <!--  Esto recibe el id del pokemon correcto dentro de las opciones posibles -->
      <PokemonPicture 
        :pokemonId="pokemon.id" 
        :showPokemon="showPokemon" />
    <!-- opciones -->

    <!-- Escucha el evento personalizado selection enviado desde PokemonOptions, el cual trae el id del pokemon seleccionado
    por el usuario -->
      <PokemonOptions 
        :pokemons="pokemonArr"
        @selection="checkAnswer" />


      <!-- template en vue es como fragment en react -->
      <template v-if="showAnswer">

        <h2 class="fade-in">{{ message }}</h2>
        <button @click="newGame">
          New Game
        </button>

      </template>

  </div>


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
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      // Esto crea un numero aleatorio lo redondea a entero y da un valor entre 0 y 3 que son las posiciones posibles en pokemonsArr
      const rndInt = Math.floor( Math.random() * 4 )
      // El pokemon correcto sera el que tenga la posicion del numero aleatorio en el pokemonsArr
      this.pokemon = this.pokemonArr[ rndInt ]
    },
    checkAnswer(pokemonSelected) {
      // console.log(pokemonId)
      this.showPokemon = true
      this.showAnswer = true

      // Si el id que viene desde el evento selection es igual al id del pokemon correcto
      if( pokemonSelected === this.pokemon.id ) {
        this.message = `Correcto, ${ this.pokemon.name }`
      }else{
        this.message = `Oops, era ${ this.pokemon.name }`
      }

    },
    newGame() {
      // Para reiniciar el fuego, reiniciar las propiedades necesarias y volver a ejecutar el mixPokemonArray
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }

}
</script>

<style>

</style>