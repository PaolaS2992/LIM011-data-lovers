// Minidata
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
  };
  return obj;
});
// Filtro Huevos
export const filtroHuevo = (array, distancia) => {
  const nuevoArray = array.filter((objeto) => objeto.huevo === distancia);
  return nuevoArray;
};
// Filtro debilidades y tipo
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

// filtro buscador por nombre
export const buscarPorNombre = (array, nombre) => {
  const nuevoArraysss = array.filter((objeto) => objeto.nombre.toLowerCase().startsWith(nombre));
  return nuevoArraysss;
};

// Filtro orden alfabetico, orden asc - desc y top
// eslint-disable-next-line arrow-body-style
export const ordenAlfNum = (arr, propiedad) => {
  return arr.sort((a, b) => (a[propiedad] < b[propiedad] ? -1 : 1));
};

// SELECCIONANDO STRING.
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
    case 'MAYORF':
      return ordenAlfNum(data, 'frecuencia').slice(0, 10);
    default:
      break;
  }
};
