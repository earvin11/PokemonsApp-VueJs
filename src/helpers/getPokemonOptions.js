import pokemonApi from "@/api/pokemonApi"

const getPokemons = () => {

    //Esto crea un arreglo con 650 posiciones posibles
    const pokemonsArr = Array.from( Array(650) )

    // Esto rellena cada una de las posiciones con el index + 1 para asi tener 650 numeros en el arr
    return pokemonsArr.map( (_, index) => index + 1 )

}


const getPokemonOptions = async() => {

    // Toma lo que retorna getPokemons que es un arr con 650 numeros del 1 al 650
    // y desorganizalo con el metodo sort, almacena este arreglo resultante en mixedPokemons
    const mixedPokemons = getPokemons()
                            .sort( () => Math.random() - 0.5 )

    // Corta el mixedPokemons con el metodo splice, y almacena sus valores entre la posicion
    // 0 y 4 (0,4) y enviavelos a la funcion getPokemonsNames, almacena esa response en la const
    // pokemons
    const pokemons = await getPokemonNames( mixedPokemons.splice(0,4) )

    // La promesa getPokemonsNames regresa 4 objetos, retornalos
    return pokemons
    
}


const getPokemonNames = async( [ a,b,c,d ] = [] ) => {
    // const resp = await pokemonApi.get(`/1`)
    // console.log(resp)

    // Crea un arr con formato de peticiones con los valores que recibas en el argumento de la funcion
    const promiseArr = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`)
    ]

    // Ejecuta todas estas peticiones con promiseAll y guarda sus resp en 4 const distintas
    const [ poke1, poke2, poke3, poke4 ] = await Promise.all( promiseArr )

    // Destructura y regresa un nuevo arr de objects enviando el name e id con lo que hayan traidos las responses
    return [
        { name: poke1.data.name, id: poke1.data.id },
        { name: poke2.data.name, id: poke2.data.id },
        { name: poke3.data.name, id: poke3.data.id },
        { name: poke4.data.name, id: poke4.data.id }
    ]
    
}


export default getPokemonOptions