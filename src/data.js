/* eslint-disable no-param-reassign */
// FUNCION MINIDATA.
export const traerDataMap2 = (arr) => arr.map((ele) => {
  const obj = {
    identificador: ele.id,
    nombre: ele.name,
    imagen: ele.img,
    numero: ele.num,
    tipo: ele.type,
    altura: ele.height,
    peso: ele.weight,
    caramelos: ele.candy_count,
    horaAparicion: ele.spawn_time,
    debilidades: ele.weaknesses,
    huevo: ele.egg,
    frecuencia: ele.avg_spawns,
    Previo: ele.prev_evolution,
    Siguiente: ele.next_evolution,
  };
  return obj;
});
// FUNCION HUEVITOS.
export const filtroHuevo = (array, distancia) => {
  const nuevoArray = array.filter((objeto) => objeto.huevo === distancia);
  return nuevoArray;
};
// FUNCION PARA DEBILIDADES Y TIPO.
export const filtroDebilidadTipo = (array, propiedad, valor) => {
  const newArray = [];
  array.forEach((objeto) => {
    objeto[propiedad].forEach((string) => {
      if (string === valor) {
        newArray.push(objeto);
      }
    });
  });
  return newArray;
};
// FUNCION PARA BUSCAR NOMBRES.
export const buscarPorNombre = (array, nombres) => {
  const nuevoArraysss = array.filter((objeto) => objeto.nombre.toLowerCase().startsWith(nombres));
  return nuevoArraysss;
};
// FUNCION PARA ORDENAR POR NOMBRE, NUMERO Y TOP 10
// eslint-disable-next-line arrow-body-style
export const ordenAlfNum = (arr, propiedad) => {
  return arr.sort((a, b) => (a[propiedad] < b[propiedad] ? -1 : 1));
};
// SELECCIONANDO STRING.(PARTE DE LA FUNCIÓ ORDENAR).
// eslint-disable-next-line consistent-return
export const AsDes = (data, string) => {
  switch (string) {
    case 'A-Z':
      return ordenAlfNum(data, 'nombre');
    case 'Z-A':
      return ordenAlfNum(data, 'nombre').reverse();
    case 'ASC':
      return ordenAlfNum(data, 'numero');
    case 'DESC':
      return ordenAlfNum(data, 'numero').reverse();
    case 'MENORF':
      return ordenAlfNum(data, 'frecuencia').slice(0, 10);
    case 'MAYORF':
      return ordenAlfNum(data, 'frecuencia').reverse().slice(0, 10);
      // no default
  }
};
// FUNCION PARA EVOLUCIONES.
export const evolutions = (arr, propiedad, num) => {
  let newArray = [];
  arr.forEach((objeto) => {
    if (objeto.identificador === num) {
      if (objeto[propiedad] === undefined) {
        newArray = [];
      } else {
        objeto[propiedad].forEach((obj) => {
          obj.label = propiedad;
          newArray.push(obj);
        });
      }
    }
  });
  return newArray;
};
// FUNCION PARA INF.EVOLUCIONES Y CARAMELOS.
export const filterInfEvoAndCandy = (arr, propiedad, string) => {
  const newArray = arr.filter((obj) => obj[propiedad] === string);
  return newArray;
};
