import POKEMON from './data/pokemon/pokemon.js';
import {
  traerDataMap2, filtroHuevo, filtroDebilidadTipo, buscarPorNombre, AsDes, evolutions,
  filterInfEvoAndCandy,
} from './data.js';

// MINIDATA.
const dataPokemon = traerDataMap2(POKEMON);
// FUNCION PARA CREAR EL STRING TEMPLATE POKEMONES.
const strTemplatePokemon = (obj) => {
  const newString = `<img src="${obj.imagen}" class="imagen-pokemon">
  <p class="nombre-pokemon">${obj.nombre}</p>
  <p class="numero-pokemon">${obj.numero}</p>  
  </div>`;
  return newString;
};
// FUNCION PARA CREAR EL STRING TEMPLATE DE INFORMACION DE EVOLUCIONES.
const strTemplateInfoEvolution = (arr) => {
  let newStringInfo = '';
  arr.forEach((obj) => {
    newStringInfo += `        
          <div>
              <span>Tipo: </span>
              <span>${obj.tipo}</span>
          </div>
          <div>
              <span>Huevo: </spam>
              <span>${obj.huevo}</span>
          </div>
          <div>
              <span>Hora aparición: </span>
              <span>${obj.horaAparicion}</span>
          </div>
      `;
  });
  return newStringInfo;
};
// FUNCION PARA CREAR EL STRING TEMPLATE EVOLUCIONES.
const strTemplateEvolution = (arr) => {
  let newString = '';
  arr.forEach((obj) => {
    newString += `
      <div class = "card-evolucion">
          <div class="lado-front">
              <p>${obj.label} Evolución</p>
              <h5>${obj.num} - ${obj.name}</h5>
              <figure>
                  <img src="http://www.serebii.net/pokemongo/pokemon/${obj.num}.png" alt="" class="imagen">
              </figure>
          </div>
          <div class="lado-back">
              ${strTemplateInfoEvolution(filterInfEvoAndCandy(dataPokemon, 'numero', obj.num))}
          </div>
      </div>
      `;
  });
  return newString;
};
// FUNCION PARA CREAR EL STRING TEMPLATE MODAL.
const strTemplateModal = (obj) => {
  const newString = `
<div class="flex">
  <div class="contenido-modal">
    <span class="cerrar" id="cerrar">&times;</span>
    <div class="modal-body">
      <div class="modal-header">
        <ul>
          <li>
            <h3>${obj.numero} - ${obj.nombre}</h3>
          </li>
          <li>
            <figure>
              <img src="${obj.imagen}" alt="">
            </figure>
          </li>
        </ul>
      </div>
      <div class="modal-main">
        <ul class = "columna">
            <li>
              <div class = "atributo-titulo">Tipo</div>
              <span class = "atributo-valor">${obj.tipo}</span>
            </li>
            <li>
              <div class = "atributo-titulo">Altura</div>
              <span class = "atributo-valor">${obj.altura}</span>
            </li>
            <li>
              <div class = "atributo-titulo">Peso</div>
              <span class = "atributo-valor">${obj.peso}</span>
            </li>
            <li>
              <div class = "atributo-titulo">Caramelos</div>
              <span class = "atributo-valor">${obj.caramelos}</span>
            </li>                
        </ul>
        <ul class = "columna">
            <li>
              <div class = "atributo-titulo">H.Aparación</div>
              <span class = "atributo-valor">${obj.horaAparicion}</span>
            </li>
            <li>
              <div class = "atributo-titulo">Debilidades</div>
              <span class = "atributo-valor">${obj.debilidades}</span>
            </li>
            <li>
            <div class = "atributo-titulo">Huevitos</div>
              <span class = "atributo-valor">${obj.huevo}</span>
            </li>
            <li>
            <div class = "atributo-titulo">Frecuencia</div>
              <span class = "atributo-valor">${obj.frecuencia}</span>
            </li>
        </ul>
      </div>
      <div class="modal-footer">
        <div class="evolucion previo">${strTemplateEvolution(evolutions(dataPokemon, 'Previo', obj.identificador))}</div>
        <div class="evolucion siguiente">${strTemplateEvolution(evolutions(dataPokemon, 'Siguiente', obj.identificador))}</div>
      </div>
    </div>
  </div>
</div>`;
  return newString;
};
// FUNCION PARA CREAR CONTENEDOR DE TODOS LOS STRING TEMPLATE.
const card = (obj) => {
  const divElement = document.createElement('div');
  divElement.classList.add('tarjeta-pokemon');
  divElement.innerHTML = strTemplatePokemon(obj);
  // MODAL.
  divElement.addEventListener('click', () => {
    const divElementModal = document.createElement('div');
    divElementModal.classList.add('modal');
    divElementModal.innerHTML = strTemplateModal(obj);
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
// FUNCION PARA RECORRER Y AGREGAR LOS NODOS.
const seccionCardsPokemones = document.querySelector('#insertar-pokemones');
const templateCard = (arr) => {
  seccionCardsPokemones.innerHTML = '';
  arr.forEach((obj) => {
    seccionCardsPokemones.appendChild(card(obj));
  });
};

// PINTAR POKEMONES PANTALLA PRINCIPAL.
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
// FILTRO POR TIPO.
document.querySelector('#guia-tipos').addEventListener('click', (event) => {
  const seleccionarTipo = event.target.alt;
  templateCard(filtroDebilidadTipo(dataPokemon, 'tipo', seleccionarTipo));
});
// FILTRO POR ORDEN ALFABETICO Y NUMERICO.
document.querySelector('#ordenAlfNum').addEventListener('change', () => {
  const seleccionOpcion = document.querySelector('#ordenAlfNum').value;
  templateCard(AsDes(dataPokemon, seleccionOpcion));
});
// TOP 10 DE FRECUENCIA DE APARACION.
document.querySelector('#filtro-frecuencia').addEventListener('click', (e) => {
  const selectFrecuencia = e.target.id;
  templateCard(AsDes(dataPokemon, selectFrecuencia));
});
// FILTRO BUSCADOR.
document.querySelector('#nombre-pokemon').addEventListener('input', (event) => {
  const pokemonBuscado = event.target.value.toLowerCase();
  templateCard(buscarPorNombre(dataPokemon, pokemonBuscado));
});
// FILTRO CANTIDAD DE CANDYS.
document.querySelector('#filtro-candys').addEventListener('click', (e) => {
  const seleccionRadio = e.target.id;
  templateCard(filterInfEvoAndCandy(dataPokemon, 'caramelos', parseInt(seleccionRadio, 10)));
});
// MENU TOGLEE.
const toglee = document.querySelector('.toglee');
toglee.addEventListener('click', () => {
  document.getElementById('siderbar').classList.toggle('active');
  document.querySelector('#filtros').reset();
});
