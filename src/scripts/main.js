
let page = 0
export const fetchPokemonsData = async () => {
    let pokemonsData = []
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${20 * page}&limit=20`
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}` )
        }
        const datos = await response.json()
        const pokemons = datos.results 
        if(pokemons) {
          for(const pokemon of pokemons) {
            try{
                const response = await fetch(pokemon.url)
                const pokemonData = await response.json()
                pokemonsData.push({name: pokemonData.name, img: [pokemonData.sprites], tipo: pokemonData.types})
            }catch(err){
                console.error(err.status)
            }
          }
        }
    }catch(err){
        console.error(err.message)
    }

    return pokemonsData
}







