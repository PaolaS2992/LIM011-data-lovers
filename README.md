# Data Lovers: Pokémon

## Índice

* [1. Resumen](#1-resumen)
* [2. Imagen final del proyecto](#2-imagen-final-del-proyecto)
* [3. Investigación UX](#3-investigación-UX)
* [4. Prototipo en papel](#4-prototipo-en-papel)
* [5. Feedback](#5-feedback)
* [6. Prototipo en Figma](#6-prototipo-en-figma)

***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender, procesar y mostrar estos datos. Una manera
simple de hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir (a la derecha) una interfaz amigable y comprensible
para el usuario.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

\* Puedes ver el detalle de la data en este [link](https://gist.github.com/lalogf/dd4aa3017a9f8aa8f90dfbca382c4dc9#file-student-json)
y la interfaz construida en este [link](https://app.talento.laboratoria.la/profile/HFOoMpOreBU2psCcjjLg5O2EWEv2).

## 2. Resumen del proyecto

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que tu usuario necesita.

Como entregable final tendrás una página web que permita a los usuarios
**visualizar, filtrar, ordenar, etc.**.

Te proponemos una serie de datos de diferentes _temáticas_ para que los
explores y decidas con cuál te interesa trabajar. Cada _set_ de datos viene con
información básica sobre los datos y su estructura, y una lista de las
necesidades de los usuarios que proviene de una investigación (_research_)
hecha por el equipo de Laboratoria.

Una vez que elijas, diseña tu proyecto intentando ofrecerle la mejor experiencia
posible para ayudarle a satisfacer sus necesidades.

### Estos son datos que te proponemos:

* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 251 Pokémon de la región de Kanto
  y Johto, junto con sus respectivas estadísticas usadas en el juego
  [Pokémon GO](http://pokemongolive.com).
  * [Investigación con jugadores de Pokémon Go](/pokemon/README.md)

* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de campeones en una liga del
  juego League of Legends (LoL).
  * [Investigación con jugadores de LoL](/lol/README.md)

* [Harry Potter](src/data/potter/potter.json):
  Este set de datos muestra la lista de los personajes del mundo de
  [Harry Potter: Wizards Unite](https://www.wizardingworld.com), junto con sus
  respectivas características mencionadas en la serie de novelas de Harry Potter
  escrita por la autora británica J.K.Rowling.
  * [Investigación con jugadores de Harry Potter: Wizards Unite](/potter/README.md)


## 3. Objetivos de aprendizaje

El objetivo principal de este proyecto es que, entendiendo las necesidades de
tus usuarios, aprendas a diseñar y construir una interfaz web donde se pueda
visualizar y manipular data.

Revisa la lista y reflexiona sobre los objetivos que conseguiste en el
proyecto anterior. Piensa en eso al decidir tu estrategia de trabajo individual
y de equipo.

### UX

- [X] Diseñar la aplicación pensando y entendiendo al usuario.
- [X] Crear prototipos para obtener _feedback_ e iterar.
- [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [X] Planear y ejecutar _tests_ de usabilidad.

### HTML y CSS

- [X] Entender y reconocer por qué es importante el HTML semántico.
- [X] Identificar y entender tipos de selectores en CSS.
- [X] Entender como funciona `flexbox` en CSS.
- [X] Construir tu aplicación respetando el diseño planeado (maquetación).

### DOM

- [X] Entender y reconocer los selectores del DOM (querySelector | querySelectorAll).
- [X] Manejar eventos del DOM. (addEventListener)
- [X] Manipular dinámicamente el DOM. (createElement, appendchild, innerHTML, value)

### Javascript

- [X] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [X] Manipular objects (key | value).
- [X] Entender el uso de condicionales (`if-else` | `switch`).
- [X] Entender el uso de bucles (`for` | `forEach`).
- [ ] Entender la diferencia entre expression y statements.
- [X] Utilizar funciones (parámetros | argumentos | valor de retorno).
- [ ] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [X] Utilizar ES Modules (`import` | `export`).

### Pruebas Unitarias (_testing_)
- [ ] Testear funciones (funciones puras).

### Git y GitHub
- [X] Ejecutar comandos de git (`add` | `commit` | `pull` | `status` | `push`).
- [ ] Utilizar los repositorios de GitHub (`clone` | `fork` | gh-pages).
- [ ] Colaborar en Github (pull requests).

### Buenas prácticas de desarrollo
- [ ] Organizar y dividir el código en módulos (Modularización).
- [ ] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [X] Utilizar linter para seguir buenas prácticas (ESLINT).

## 4. Consideraciones generales

* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (`commit`/`push`) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo: toma como referencia 3 semanas.

## 5. Criterios de aceptación mínimos del proyecto

Los criterios que deberás considerar para saber si has completado este proyecto
son:

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### Historias de usuario

Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de entendimiento de tus usuarios.

## 1. Resumen

Este proyecto permite al usuario visualizar a los 151 Pokemones de la región Kanto, organizados en orden numérico. Además, también podrá usar filtros avanzados de búsqueda como de manera ascendente o descendente, por huevos (para conocer los kilometros) y por debilidades. 
Buscamos que con esta información el usuario pueda mejorar su estrategia de juego en Pokémon Go.

## 2. Imagen final del proyecto
### 2.1 . Desktop

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/pantallafinal1.jpg)

### 2.2. Mobile
![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/pantallamovil.jpg)
***

## 3. Investigación UX

Pokémon GO es una experiencia de juego internacional que cuenta con más de mil millones de descargas y una gran comunidad de jugadores que siempre buscan capturar a pokemones únicos, superar desafíos y culminar misiones.

A fin de poder ayudar a esta gran comunidad de jugadores pensamos en una web que les de información de una manera fácil y rápida sobre sus Pokemones ya que habíamos encontrado  que muchos jugadores consultaban en videos de Youtube y en diversas paginas web sobre como mejorar su juego pero  encontraban una saturación de información que no permitía distinguir a los usuarios lo que realmente necesitaban.

Es por ello que creamos POKEDATA, a fin de poder otorgar información rápida y precisa para que los usuarios tomen mejores decisiones en el juego.

Dentro de la investigación encontramos lo siguiente:

- Los Pokémon tienen características únicas que determinan las decisiones que toma el usuario (tipo, debilidad, peso, multiplicador, etc.)
- Un maestro Pokémon antes de salir a cazar los Pokémon tiene que saber el top 10 de frecuencia de aparición de los Pokémon.
- Los Pokémon tienen distintos tipos y debilidades de combate. Estas características son importantes cuando un maestro Pokémon elige al Pokémon más adecuado para su batalla. Hay veces que tiene que elegir a los quetienen menos cantidad de debilidades y saber de que tipo son. Por ello, es importante para un maestro Pokémon poder ordenarlos por estas 2 características.
- Los Pokémon evolucionan y es importante para un
  maestro Pokémon saber cuántas y cuáles son las evoluciones que tienen antes y después.
- Los Pokémon se alimentan de caramelos y un maestro Pokémon necesita saber cuáles tienen caramelos más cercanos para poder enfocarse en conseguirlos.

  ### 3.1. Historias de usuario

  Teniendo en cuenta la información que valoran nuestros usuarios, creamos las siguientes historias de usuario a fin de organizar mejor el desarrollo de nuestra web:

  - Como usuario necesito que se vean todos los Pokémon para visualizarlos en orden numérico.
  - Como usuario necesito ver la información de cada Pokémon a fin de elegir mejor al momento de la batalla.
  - Como usuario necesito filtrar a los Pokémon por su tipo, a fin de realizar búsquedas mas específicas.
  - Como usuario necesito filtrar a los Pokémon por sus debilidades para elegir al pokémon indicado en una batalla.
  - Como usuario necesito filtrar por huevos para saber cuantos kilómetros debo caminar para eclosionar.
  - Como usuario necesito poder buscar a un pokémon escribiendo su nombre a fin de que sea una búsqueda mucho mas rápida.
  
  - Como usuario necesito filtrar por orden alfabetico a fin de realizar una búsqueda ordenada.
  - Como usuario necesito ver la página en distintos dispositivos para mayor comodidad.
  - Como usuario necesito filtrar por evolución para saber la siguiente evolcuión de un pokémon.
  ***
## 4. Prototipo en papel

### 4.1. Desktop

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/escritorio1.jpeg)

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/escritorio2.jpeg)

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/escritorio3.jpeg)

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/escritorio4.jpeg)

### 4.2. Mobile

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/celularpapel1.jpeg)

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/celularpapel2.jpeg)

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/celularpapel3.jpeg)

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/celularpapel4.jpeg)
***
## 5. Feedback
Testeamos el prototipo de baja fidelidad con 5 usuarios y se realizaron los siguientes cambios:

* Eliminar los botones de tipo de Pokemon que estaban en la parte superior de la pantalla ya que los usuarios encontraron la primera pantalla muy recargada de información.
* Crear un menú desplegable en donde se ubicaban las opciones de filtrado y tipo de Pokemon, ya que los usuarios estaban acostumbrados a este tipo de menú y hacía que la primera página de la web se vea más ordenada.
*  El usuario identificó el listado de Pokemones y su información detallada, tuvo alguna dificultad con el buscador y el idioma ya que en su mayoría el contenido estaba en ingles y las opciones de filtrado en español, sin embargo, al descubrir el bloque de opciones de filtrado y ordenado de cada Pokémon pudo identificar y clasificar a cada Pokemon.
***
## 6. Prototipo en Figma

### 6.1. Desktop

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/figmaescritorio.png)

\* Puedes ver el prototipo desktop completo en este [link](https://www.figma.com/proto/AD7dxL6NzPTDVg1AFfpQKC/POKE?node-id=2%3A2&scaling=min-zoom)

### 6.2. Mobile

![](https://github.com/fiofernandini/LIM011-data-lovers/blob/PruebasFio/src/imagenes/figmacelular.png)

\* Puedes ver el prototipo mobile completo en este [link](https://www.figma.com/proto/8QId6tCu6gQDM7UdPdSz0E/POKE-CELULAR?node-id=1%3A2&scaling=min-zoom)

***
