const list = document.querySelector('.pokemonCards-container');
import { fetchPokemonsData } from "./main";
const renderPokemons = (arr) => {
    if (!arr || arr.length === 0) {
        console.error("No hay datos para renderizar.");
        return;
    }

    arr.forEach(e => {
        const listItem = document.createElement('li');
        listItem.classList.add('pokemon-card');
        const types = e.tipo.map(t => t.type.name).join(', '); 
        const card = `
            <h4>${e.name}</h4>
            <img src="${e.img[0].front_default}" alt="${e.name}" />
            <span>Tipos: ${types}</span>`;
        listItem.innerHTML = card; 
        list.appendChild(listItem); 
    });
};




fetchPokemonsData().then(pokemonsData => {
    renderPokemons(pokemonsData)
}).catch(err => {
    console.log(`Error al renderizar los pókemon: ${err.message}`)
}) 