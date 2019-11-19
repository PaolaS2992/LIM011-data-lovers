import POKEMON from './data/pokemon/pokemon.js';
import {
  traerDataMap2, filtroHuevo, filtroDebilidadTipo, buscarPorNombre, AsDes, evolutions,
} from './data.js';

// MINIDATA.
const dataPokemon = traerDataMap2(POKEMON);

// CREACION TEMPLATE DE EVOLUCIONES.
const stringEvolution = (arr) => {
  let newString = '';
  arr.forEach((obj) => {
    newString += `
<div class = "columna-evo">
    <p>${obj.label}</p>
    <figure>
      <img class="imagen-evolucion" src="http://www.serebii.net/pokemongo/pokemon/${obj.num}.png">
    </figure>
    <h4>${obj.name}</h4>
</div>
  `;
  });
  return newString;
};
// CREACIÓN ELEMENTO DIV CON STRING TEMPLATE.
const card = (obj) => {
  const divElement = document.createElement('div');
  divElement.classList.add('tarjeta-pokemon');
  divElement.innerHTML = `<img src="${obj.imagen}" class="imagen-pokemon">
  <p class="nombre-pokemon"  >${obj.nombre}  </p>
  <p class="numero-pokemon" >${obj.numero} </p>  
  </div>`;

  divElement.addEventListener('click', () => {
    const divElementModal = document.createElement('div');
    divElementModal.classList.add('modal');
    divElementModal.innerHTML = `
    <div class="flex">
      <div class="contenido-modal">
        <span class="cerrar" id="cerrar">&times;</span>
        <div class="modal-body">
          <div class="modal-header">
            <div>
              <figure>
                <img src="${obj.imagen}">
              </figure>
                <h4>${obj.nombre}</h4>
                <h5>${obj.numero}</h5>
            </div>
          </div>
          <div class="modal-main">
            <div class = "columna">
                <h5 class="atributo-titulo">Tipo</h5>
                <p><span class="atributo-valor">${obj.tipo}</span></p>
                <p class ="atributo-titulo">Altura</p>
                <p><span class="atributo-valor">${obj.altura}</span></p>
                <p class = "atributo-titulo">Peso</p>
                <p><span class = "atributo-valor">${obj.peso}</span></p>
                <p class = "atributo-titulo">Caramelos</p>
                <p><span class = "atributo-valor">${obj.caramelos}</span></p>          
            </div>
            <div class = "columna">
                <p class = "atributo-titulo">H.Aparación</p>
                <p><span class = "atributo-valor">${obj.horaAparicion}</span></p>
                <p class = "atributo-titulo">Debilidades</p>
                <p><span class = "atributo-valor">${obj.debilidades}</span></p>
                <p class = "atributo-titulo">Encubadora</p>
                <p><span class = "atributo-valor">${obj.huevo}</span><p/>
            </div>
          </div>
          <div class="modal-footer">
            <div class="evolucion">${stringEvolution(evolutions(dataPokemon, 'Previo', obj.identificador))}</div>
            <div class="evolucion">${stringEvolution(evolutions(dataPokemon, 'Siguiente', obj.identificador))}</div>
          </div>
        </div>
      </div>
    </div>`;
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
// PINTAR POKEMONES
const seccionCardsPokemones = document.querySelector('#insertar-pokemones');
const templateCard = (arr) => {
  seccionCardsPokemones.innerHTML = '';
  arr.forEach((obj) => {
    seccionCardsPokemones.appendChild(card(obj));
  });
};
templateCard(dataPokemon);

// FILTRO POR HUEVO.
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
// FILTRO BUSCADOR
document.querySelector('#nombre-pokemon').addEventListener('input', (event) => {
  const pokemonBuscado = event.target.value.toLowerCase();
  templateCard(buscarPorNombre(dataPokemon, pokemonBuscado));
});
// MENU TOGLEE
const toglee = document.querySelector('.toglee');
toglee.addEventListener('click', () => {
  document.getElementById('siderbar').classList.toggle('active');
  document.querySelector('#filtros').reset();
});
