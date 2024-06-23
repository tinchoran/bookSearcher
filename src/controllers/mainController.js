require("dotenv").config();
const service = require("../services/searchService");


module.exports = {
    home: async (req, res) => {
        return res.render("home", {
            styles: ["/styles/home.css"],
            layout: "layouts/home",
            title: "Book Searcher"
        });
    },

    search: async (req, res) => {
        const { keyword } = req.query;
        if (!keyword) {
            return res.send("Debe especificar los parámetros de búsqueda");
        }

        const result = await service.searchBooks(keyword);

        if (result.isError) {
            
            console.log(result.msg);
            return res.send("Hubo un error");

        } else if (result.totalItems === 0) {

            return res.send("No se encontró ningún libro");

        } else {

            return res.render("books", {
                view: {
                    items: result.items
                },
                title: "Library | " + keyword,
                styles: ["/styles/books.css"],
                layout: "layouts/main"
            });

        }
    },

    searchById: async (req, res) => {
        const { id } = req.params;

        const result = await service.getBookById(id);

        if (result.isError) {
            console.log(result.msg);
            return res.status(400).send(result.msg);
        } else {

            return res.render("book", {
                layout: "layouts/main",
                view: {
                    info: result,
                },
                title: result.volumeInfo.title,
                styles: ["/styles/book.css"]
            });
        }
    }
};
