# Dog Breeds App

Proyecto en React para la consulta de razas de perros desde una API externa.

## ¿Cómo arrancar el proyecto?

Lo primero de todo, deberemos clonar la aplicación:

```
git clone https://github.com/alextomas80/Dog-breeds.git
```

E instalar las dependencias:

```
yarn install
```

...o bien, de forma abreviada:

```
yarn
```

Una vez el proceso de instalación de dependencias podremos arrancar el proyecto con `yarn start` y consultarlo en [http://localhost:3000](http://localhost:3000).

## El proyecto

La aplicación la he realizado con **React**, dónde se gestiona el estado de la misma con la librería [Redux](https://es.redux.js.org/) y el middleware [Thunk](https://github.com/reduxjs/redux-thunk).

La maquetación hace uso de [Styled Components](https://styled-components.com/) y he aprovechado a gestionar mínimamento un aspecto aceptable para dispositivos móviles.

### Organización

- **components**: directorio de componentes que se usan a lo largo de la aplicación.
- **hoc**: destino de los HOCs de la aplicación, en este caso sólo he usado uno
- **store**: configuración de la store y definicición de las acciones y reducers
- **test**: utilidades para testing
- **App.js**: punto de entrada de la aplicación
- **GlobalStyle.js**: estilos globales
