import POKEMON from './data/pokemon/pokemon.js';
import {
  traerDataMap2, filtroHuevo, filtroDebilidadTipo, buscarPorNombre, AsDes,
} from './data.js';

const card = (obj) => {
  const divElement = document.createElement('div');
  divElement.classList.add('tarjeta-pokemon');
  divElement.innerHTML = `
  <img src="${obj.imagen}" class="imagen-pokemon">
  <p class="nombre-pokemon">${obj.nombre}  </p>
  <p class="numero-pokemon">${obj.numero} </p>
  `;

  divElement.addEventListener('click', () => {
    const divElementModal = document.createElement('div');
    divElementModal.classList.add('modal');
    divElementModal.innerHTML = `
      <div class="flex">
        <div class="contenido-modal">
          <span class="cerrar" id="cerrar">&times;</span>
          <div class"modal-body">
            <img src="${obj.imagen}" class="datos-alternativos-img">
            <div class="datos-alternativos">Tipo: ${obj.tipo}</div>
            <div class="datos-alternativos">Altura: ${obj.altura}</div>
            <div class="datos-alternativos">Peso: ${obj.peso}</div>
            <div class="datos-alternativos">Caramelos: ${obj.caramelos}</div>
            <div class="datos-alternativos">Hora de aparación: ${obj.horaAparicion}</div>
            <div class="datos-alternativos">Debilidades:</div>
            <div class="datos-alternativos">${obj.debilidades}</div>
            <figure class="datos-alternativos">
              <img src="./imagenes/huevo.png" width="15" height"15">${obj.huevo}
            </figure>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(divElementModal);
    divElementModal.classList.add('modal-open');
    const cerrar = document.getElementById('cerrar');
    // CERRAR MODAL
    cerrar.addEventListener('click', () => {
      document.body.removeChild(divElementModal);
    });
  });
  return divElement;
};

const seccionCardsPokemones = document.querySelector('#insertar-pokemones');
const dataPokemon = traerDataMap2(POKEMON);
const templateCard = (arr) => {
  seccionCardsPokemones.innerHTML = '';
  arr.forEach((obj) => {
    seccionCardsPokemones.appendChild(card(obj));
  });
};
templateCard(dataPokemon);


//  FILTRO POR HUEVO.
document.querySelector('#filtro-distancia').addEventListener('change', () => {
  const seleccionarhuevo = document.querySelector('#filtro-distancia').value;
  templateCard(filtroHuevo(dataPokemon, seleccionarhuevo));
});
// FILTRO POR DEBILIDADES.
document.querySelector('#filtro-debilidades').addEventListener('change', () => {
  const seleccionarDebilidad = document.querySelector('#filtro-debilidades').value;
  templateCard(filtroDebilidadTipo(dataPokemon, 'debilidades', seleccionarDebilidad));
});

// FILTRO POR TIPO
document.querySelector('#guia-tipos').addEventListener('click', (event) => {
  const seleccionarTipo = event.target.alt;
  templateCard(filtroDebilidadTipo(dataPokemon, 'tipo', seleccionarTipo));
});

// FILTRO POR ORDEN ALFABETICO Y NUMERICO.
document.querySelector('#ordenAlfNum').addEventListener('change', () => {
  const seleccionOpcion = document.querySelector('#ordenAlfNum').value;
  templateCard(AsDes(dataPokemon, seleccionOpcion));
});

// TOP 10 DE FRECUENCIA DE APARICIÓN.
const btnTop10 = document.querySelector('#mayor-frecuencia');
btnTop10.addEventListener('click', () => {
  templateCard(AsDes(dataPokemon, btnTop10.value));
});

//  FILTRO BUSCADOR
document.querySelector('#nombre-pokemon').addEventListener('input', (event) => {
  const pokemonBuscado = event.target.value.toLowerCase();
  templateCard(buscarPorNombre(dataPokemon, pokemonBuscado));
});

// MENU
const toglee = document.querySelector('.toglee');
toglee.addEventListener('click', () => {
  document.getElementById('siderbar').classList.toggle('active');
  document.querySelector('#filtros').reset();
});
