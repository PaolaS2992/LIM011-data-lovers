export const mostrarPokemon = (datos) => {
  let contenedorPokemon = '';
  datos.forEach((elementos) => {
    contenedorPokemon += `
    <div class="tarjeta-pokemon" id=${elementos.id}>
      <img src="${elementos.img}" class="imagen-pokemon">
      <p class="nombre-pokemon">${elementos.name}</p>
      <p class="numero-pokemon">${elementos.num}</p>
    </div>`;
  });
  return contenedorPokemon;
};
