require("dotenv").config();
const service = require("../services/searchService");

module.exports = {
    home: async (req, res) => {
        res.render("home", {
            layout: "layouts/main",
            styles: []
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
            res.send("Hubo un error");

        } else if (result.totalItems === 0) {

            res.send("No se encontró ningún libro");

        } else {

            res.render("books", {
                view: {
                    items: result.items
                },
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
            res.status(400).send(result.msg);
        } else {
            res.send(result);
        }
    }
};
