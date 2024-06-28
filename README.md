# 📘📚Book Searcher 📘📚

### Aplicación web que permite al usuario buscar libros por palabras clave, como autor, año de publicación, editorial, título y más.

### [Book Searcher](https://martinranzuglia-book-searcher.vercel.app/) renderiza vistas a partir de datos obtenidos de la REST API [Google Books](https://developers.google.com/books?hl=es-419)

## ⚙Lenguajes & tecnologías utilizadas
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![EJS](https://img.shields.io/badge/EJS-2D2D2D?style=for-the-badge&logo=ejs&logoColor=white)](https://ejs.co/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Google Books API](https://img.shields.io/badge/Google%20Books%20API-white?style=for-the-badge&logo=google&logoColor=4285F4)](https://developers.google.com/books/docs/overview)





* ### Front end
    * Html  
    * CSS
        * Flex
        * Grid
    * [Bootstrap](https://getbootstrap.com)
* ### Back End
    * NodeJS
        * Express
        * EJS view Engine
        * Express-ejs-layouts


## 📋Requerimientos
Luego de clonar el repositorio o instalarlo, debe correr el siguiente comando en consola para **instalar las dependencias**:
```
npm install
```
Posteriormente, debe [conseguir una API Key](https://developers.google.com/books/docs/v1/using?hl=es-419) y habilitarla para la Books API de Google

Una vez obtenida la clave, cree un archivo **".env"** en la raíz del proyecto y copie la estructura que se encuentra en el archivo ".env_example", reemplazando el valor de la variable de entorno "API_KEY" por su clave.

Para **levantar el servidor**, ejecute el comando:
```
npm run start
```

##  📂Estructura
```
├──index.js     # Entrypoint
├──package.json 
├──package-lock.json
├──README.md
├──.gitignore
├──node_modules
├──.env         # Variables de Entorno
├──public
    ├──img          
    ├──styles
├──src
    ├──routes
        ├──main.routes.js
    ├──controllers
        ├──mainController.js
    ├──services
        ├──searchService.js
    ├──views
        ├──book.ejs
        ├──books.ejs
        ├──home.ejs
        ├──layouts
            ├──home.ejs
            ├──main.ejs
        ├──partials
            ├──header.ejs
            ├──footer.ejs
    

```

## 🖼️Views
### Home
![Captura de pantalla de la página home](/public/img/homeView.png "This is a sample image.")
### Books
![Captura de pantalla de la página home](/public/img/booksView.png "This is a sample image.")
### Book
![Captura de pantalla de la página home](/public/img/bookView.png "This is a sample image.")



## Nota
Debido a una particularidad de la API, que encuentra más resultados a medida que se incrementa el número de página de búsqueda, no está implementada la páginación en el proyecto. Se puede implementar pero se debe contar que a medida que el cliente solicite una página posterior aumentará el número de resultados que se encuentren.
