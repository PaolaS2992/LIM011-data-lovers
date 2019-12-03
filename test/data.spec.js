import {
  filtroHuevo, filtroDebilidadTipo, buscarPorNombre, AsDes, traerDataMap2, evolutions,
  filterInfEvoAndCandy, filtroGeneralDebilidad, filtroFusionado,
} from '../src/data';

describe('traerDataMap2', () => {
  it('deberia ser una funcion', () => {
    expect(typeof traerDataMap2).toBe('function');
  });
  it('Deberia crear una copia del array', () => {
    const dataPrincipal = [{ name: 'Bulbasaur' }, { name: 'Ivysaur' }];
    const dataNueva = [{ nombre: 'Bulbasaur' }, { nombre: 'Ivysaur' }];
    expect(traerDataMap2(dataPrincipal)).toEqual(dataNueva);
  });
});

describe('filtroHuevo', () => {
  it('debería ser una función', () => {
    expect(typeof filtroHuevo).toBe('function');
  });

  it('deberia filtrar por la distancia seleccionada 2km', () => {
    const dataHuevo = [{ nombre: 'Bulbasaur', huevo: '2 km' }, { nombre: 'Charmeleon', huevo: 'Not in Eggs' }, { nombre: 'Charmander', huevo: '2 km' }];
    const dataEsperada = [{ nombre: 'Bulbasaur', huevo: '2 km' }, { nombre: 'Charmander', huevo: '2 km' }];
    expect(filtroHuevo(dataHuevo, '2 km')).toEqual(dataEsperada);
  });
});

describe('filtroDebilidadTipo', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filtroDebilidadTipo).toBe('function');
  });

  it('deberia filtrar por tipo fuego', () => {
    const dataTipo = [{ nombre: 'Bulbasaur', tipo: ['Grass', 'Poison'] }, { nombre: 'Charmeleon', tipo: ['Fire'] }, { nombre: 'Vulpix', tipo: ['Fire'] }];
    const tipoEsperado = [{ nombre: 'Charmeleon', tipo: ['Fire'] }, { nombre: 'Vulpix', tipo: ['Fire'] }];
    expect(filtroDebilidadTipo(dataTipo, 'tipo', 'Fire')).toEqual(tipoEsperado);
  });
});

describe('filtoDebilidadTipo', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filtroDebilidadTipo).toBe('function');
  });

  it('deberia filtrar por debilidad agua', () => {
    const dataDebilidad = [{ nombre: 'Bulbasaur', debilidades: ['Fire', 'Ice'] }, { nombre: 'Charmeleon', debilidades: ['Water', 'Ground'] }];
    const debilidadEsperada = [{ nombre: 'Charmeleon', debilidades: ['Water', 'Ground'] }];
    expect(filtroDebilidadTipo(dataDebilidad, 'debilidades', 'Water')).toEqual(debilidadEsperada);
  });
});

describe('buscarPorNombre', () => {
  it('deberia ser una funcion', () => {
    expect(typeof buscarPorNombre).toBe('function');
  });
  it('deberia filtrar por  pokemon que empieza con b', () => {
    const DataNombre = [{ nombre: 'Bulbasaur' }, { nombre: 'Charmeleon' }];
    const nombreEsperado = [{ nombre: 'Bulbasaur' }];
    expect(buscarPorNombre(DataNombre, 'b')).toEqual(nombreEsperado);
  });
});

describe('AsDes', () => {
  it('deberia ser una funcion', () => {
    expect(typeof AsDes).toBe('function');
  });
  it('deberia ordenar', () => {
    const dataOrdenar = [{ nombre: 'Zubat', numero: '049', frecuencia: 652 }, { nombre: 'Articuno', numero: '144', frecuencia: 0 }, { nombre: 'Bulbasaur', numero: '001', frecuencia: 69 }];
    const ordenAz = [{ nombre: 'Articuno', numero: '144', frecuencia: 0 }, { nombre: 'Bulbasaur', numero: '001', frecuencia: 69 }, { nombre: 'Zubat', numero: '049', frecuencia: 652 }];
    const ordenZa = [{ nombre: 'Zubat', numero: '049', frecuencia: 652 }, { nombre: 'Bulbasaur', numero: '001', frecuencia: 69 }, { nombre: 'Articuno', numero: '144', frecuencia: 0 }];
    const ascendente = [{ nombre: 'Bulbasaur', numero: '001', frecuencia: 69 }, { nombre: 'Zubat', numero: '049', frecuencia: 652 }, { nombre: 'Articuno', numero: '144', frecuencia: 0 }];
    const descendente = [{ nombre: 'Articuno', numero: '144', frecuencia: 0 }, { nombre: 'Zubat', numero: '049', frecuencia: 652 }, { nombre: 'Bulbasaur', numero: '001', frecuencia: 69 }];
    const MayorFrecuencia = [{ nombre: 'Zubat', numero: '049', frecuencia: 652 }, { nombre: 'Bulbasaur', numero: '001', frecuencia: 69 }, { nombre: 'Articuno', numero: '144', frecuencia: 0 }];
    const MenorFrecuencia = [{ nombre: 'Articuno', numero: '144', frecuencia: 0 }, { nombre: 'Bulbasaur', numero: '001', frecuencia: 69 }, { nombre: 'Zubat', numero: '049', frecuencia: 652 }];
    expect(AsDes(dataOrdenar, 'A-Z')).toEqual(ordenAz);
    expect(AsDes(dataOrdenar, 'Z-A')).toEqual(ordenZa);
    expect(AsDes(dataOrdenar, 'ASC')).toEqual(ascendente);
    expect(AsDes(dataOrdenar, 'DESC')).toEqual(descendente);
    expect(AsDes(dataOrdenar, 'MAYORF')).toEqual(MayorFrecuencia);
    expect(AsDes(dataOrdenar, 'MENORF')).toEqual(MenorFrecuencia);
  });
});

describe('Filtro por Evoluciones', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof evolutions).toBe('function');
  });
  const dataIngreso = [{ identificador: 1, nombre: 'Bulbasaur', Siguiente: [{ num: '002', name: 'Ivysaur' }, { num: '003', name: 'Venusaur' }] }];
  it('Deberia filtrar => EVOLUCIONES', () => {
    const dataSalida = [{ num: '002', name: 'Ivysaur', label: 'Siguiente' }, { num: '003', name: 'Venusaur', label: 'Siguiente' }];
    expect(evolutions(dataIngreso, 'Siguiente', 1)).toEqual(dataSalida);
  });
  it('Deberia filtrar => EVOLUCIONES VACIAS', () => {
    const dataSalida = [];
    expect(evolutions(dataIngreso, 'Previo', 1)).toEqual(dataSalida);
  });
  it('Deberia filtrar => EVOLUCIONES IDENTIFICADOR', () => {
    const dataSalida = [];
    expect(evolutions(dataIngreso, 'Siguiente', '1')).toEqual(dataSalida);
  });
});

describe('Filtro por Inf.Evoluciones y Candy', () => {
  it('Deberia ser una Función', () => {
    expect(typeof filterInfEvoAndCandy).toBe('function');
  });
  const dataIngreso = [{ numero: '001', nombre: 'Bulbasaur', caramelos: 25 }, { numero: '002', nombre: 'Ivysaur', caramelos: 100 }, { numero: '004', nombre: 'Charmander', caramelos: 25 }];
  const dataInfoEvo = [{ numero: '001', nombre: 'Bulbasaur', caramelos: 25 }];
  const dataCandys = [{ numero: '001', nombre: 'Bulbasaur', caramelos: 25 }, { numero: '004', nombre: 'Charmander', caramelos: 25 }];
  it('Deberia filtrar => INFORMACIÓN EVOLUCIONES', () => {
    expect(filterInfEvoAndCandy(dataIngreso, 'numero', '001')).toEqual(dataInfoEvo);
  });
  it('Deberia filtrar => CARAMELOS', () => {
    expect(filterInfEvoAndCandy(dataIngreso, 'caramelos', 25)).toEqual(dataCandys);
  });
});

describe('Filtro para ordenar más o menos débiles', () => {
  it('Debería ser una función', () => {
    expect(typeof filtroGeneralDebilidad).toBe('function');
  });
  it('Debería filtrar => ORDENAR POR MENOR CANTIDAD "LENGTH" DE DEBILIDADES', () => {
    const dataIngreso = [{ numero: '102', nombre: 'Exeggcute', debilidades: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Ghost', 'Dark'] }, { numero: '019', nombre: 'Rattata', debilidades: ['Fighting'] }];
    const dataSalida = [{ numero: '019', nombre: 'Rattata', debilidades: ['Fighting'] }, { numero: '102', nombre: 'Exeggcute', debilidades: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Ghost', 'Dark'] }];
    expect(filtroGeneralDebilidad(dataIngreso, 'MENOSDEBI')).toEqual(dataSalida);
  });
  it('Debería filtrar => ORDENAR POR MAYOR CANTIDAD "LENGTH" DE DEBILIDADES', () => {
    const dataIngreso = [{ numero: '019', nombre: 'Rattata', debilidades: ['Fighting'] }, { numero: '102', nombre: 'Exeggcute', debilidades: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Ghost', 'Dark'] }];
    const dataSalida = [{ numero: '102', nombre: 'Exeggcute', debilidades: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Ghost', 'Dark'] }, { numero: '019', nombre: 'Rattata', debilidades: ['Fighting'] }];
    expect(filtroGeneralDebilidad(dataIngreso, 'MASDEBI')).toEqual(dataSalida);
  });
  it('Deberia filtrar => RETURN 0 PARA MENOS DEBIL', () => {
    const dataIngreso = [{ numero: '019', nombre: 'Rattata', debilidades: ['Fighting'] }, { numero: '102', nombre: 'Exeggcute', debilidades: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Ghost', 'Dark'] }];
    const dataSalida = [{ numero: '019', nombre: 'Rattata', debilidades: ['Fighting'] }, { numero: '102', nombre: 'Exeggcute', debilidades: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Ghost', 'Dark'] }];
    expect(filtroGeneralDebilidad(dataIngreso, 'MENOSDEBI')).toEqual(dataSalida);
  });
  it('Deberia filtrar => RETURN 0 PARA MAS DEBIL', () => {
    const dataIngreso = [{ numero: '102', nombre: 'Exeggcute', debilidades: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Ghost', 'Dark'] }, { numero: '019', nombre: 'Rattata', debilidades: ['Fighting'] }];
    const dataSalida = [{ numero: '102', nombre: 'Exeggcute', debilidades: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug', 'Ghost', 'Dark'] }, { numero: '019', nombre: 'Rattata', debilidades: ['Fighting'] }];
    expect(filtroGeneralDebilidad(dataIngreso, 'MASDEBI')).toEqual(dataSalida);
  });
});

describe('Filtro Avanzado "TOMA DOS CRITERIOS DE EVALUACIÓN"', () => {
  it('Debería ser una función', () => {
    expect(typeof filtroFusionado).toBe('function');
  });
  it('Debería filtrar por TIPO y su DEBILIDAD', () => {
    const dataIngreso = [{
      numero: '006', nombre: 'Charizard', tipo: ['Fire', 'Flying'], debilidades: ['Water', 'Electric', 'Rock'],
    },
    {
      numero: '142', nombre: 'Aerodactyl', tipo: ['Rock', 'Flying'], debilidades: ['Water', 'Electric', 'Ice', 'Rock', 'Steel'],
    },
    {
      numero: '123', nombre: 'Scyther', tipo: ['Bug', 'Flying'], debilidades: ['Fire', 'Electric', 'Ice', 'Flying', 'Rock'],
    }];

    const dataSalida = [{
      numero: '006', nombre: 'Charizard', tipo: ['Fire', 'Flying'], debilidades: ['Water', 'Electric', 'Rock'],
    },
    {
      numero: '142', nombre: 'Aerodactyl', tipo: ['Rock', 'Flying'], debilidades: ['Water', 'Electric', 'Ice', 'Rock', 'Steel'],
    }];
    expect(filtroFusionado(dataIngreso, 'Flying', 'Water')).toEqual(dataSalida);
  });
});
