import { fetchPokemonsData } from "./main"
import { renderPokemons } from "./renderPokemons"
import { list } from "./renderPokemons"
const currentPage = document.getElementById('page')
currentPage.textContent = 1
let page = 0
export const paginationListener = document.getElementById('buttonsPagination').addEventListener('click', (e)  => {
  if(e.target.classList.contains('btnNext')){
    nextPage()
  }else if(e.target.classList.contains('btnPrev')){
    prevPage()
  }
  
})

const nextPage = () => {    
        page += 1
        console.log(page)
        currentPage.textContent = parseInt(currentPage.textContent) + 1
        fetchPokemonsData(page).then(pokemonsData => {
            list.innerHTML = ''
            renderPokemons(pokemonsData)
        }).catch(err => {
            console.log(`Error al renderizar los pókemon: ${err.message}`)
        }) 
}

const prevPage = () => {
    page -= 1
    console.log(page)
    currentPage.textContent = parseInt(currentPage.textContent) - 1
    fetchPokemonsData(page).then(pokemonsData => {
        list.innerHTML = ''
        renderPokemons(pokemonsData)
    }).catch(err => {
        console.log(`Error al renderizar los pókemon: ${err.message}`)
    }) 
}
 
