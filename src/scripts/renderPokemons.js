export const list = document.querySelector('.pokemonCards-container');
import { fetchPokemonsData } from "./main";
export const renderPokemons = (arr) => {
    if (!arr || arr.length === 0) {
        console.error("No hay datos para renderizar.");
        return;
    }

    arr.forEach(e => {
        const listItem = document.createElement('li');
        listItem.classList.add(`pokemon-card`)
        listItem.setAttribute('id', `pokemon${e.id}`);
        const types = e.tipo.map(t => t.type.name).join(', '); 
        const card = `
            <h4 id="pokemonName">${e.name}</h4>
            <img src="${e.img[0].front_default}" alt="${e.name} class="pokemonImg" " />
            <span>Tipos: ${types}</span>
            <ul >
            <p>STATS</p>
                <li>${e.stats[0].stat.name}: ${e.stats[0].base_stat}</li>
                <li>${e.stats[1].stat.name}: ${e.stats[1].base_stat}</li>
                <li>${e.stats[2].stat.name}: ${e.stats[2].base_stat}</li>
                <li>${e.stats[3].stat.name}: ${e.stats[3].base_stat}</li>
                <li>${e.stats[4].stat.name}: ${e.stats[4].base_stat}</li>
            </ul>
            `;
            
        listItem.innerHTML = card; 
        list.appendChild(listItem); 
    });
};




fetchPokemonsData().then(pokemonsData => {
    renderPokemons(pokemonsData)
}).catch(err => {
    console.log(`Error al renderizar los pókemon: ${err.message}`)
}) 