import POKEMON from './data/pokemon/pokemon.js';
import { mostrarPokemon } from './data.js';

document.querySelector('#insertar-pokemones').innerHTML = mostrarPokemon(POKEMON);

const modal = document.getElementById('modal');
const flex = document.getElementById('flex');
const close = document.getElementById('close');

document.querySelector('#insertar-pokemones').addEventListener('click', (event) => {
  modal.style.display = 'block';
  const idPokemon = parseInt(event.target.parentElement.id, 10);
  const indicePokemon = POKEMON.map((arr) => arr.id).indexOf(idPokemon);
  document.querySelector('.body-modal').innerHTML = `<div id="${POKEMON[indicePokemon].id}">
<img class="datos-alternativos-img" src="${POKEMON[indicePokemon].img}">
<div class="datos-alternativos">ALtura:${POKEMON[indicePokemon].height}</div>
    <p class="datos-alternativos">Peso: ${POKEMON[indicePokemon].weight}</p>
    <p class="datos-alternativos">Caramelos: ${POKEMON[indicePokemon].candy_count}</p>
    <p class="datos-alternativos">Hora de Aparición: ${POKEMON[indicePokemon].spawn_time}</p>
    <p class="datos-alternativos">Debilidades:</p>
    <p class="datos-alternativos">${POKEMON[indicePokemon].weaknesses}</p>  
</div>`;
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === flex) {
    modal.style.display = 'none';
  }
});
