require("dotenv").config();


module.exports = {
    searchBooks: async (kw) => {
        const apK = process.env.API_KEY;
        const maxResults = 40;
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${kw}&maxResults=${maxResults}&key=${apK}`;

        try {
            const result = await fetch(apiUrl).then(resp => resp.json());
            return result;
        } catch (error) {
            return {
                isError: true,
                error: error.message
            };
        }
    },

    getBookById: async (id) => {
        try {
            const url = `https://www.googleapis.com/books/v1/volumes/${id}`;
            const result = await fetch(url).then(resp => resp.json());

            if (result.error) {
                throw new Error(result.error.message);
            }

            return result;
        } catch (error) {
            return {
                isError: true,
                msg: error.message
            };
        }
    }
};
