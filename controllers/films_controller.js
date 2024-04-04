const fetchFilms = require('../utils/fetch_film');



const getTitle = async (req, res) => {
    try {
        const title = req.params.title;
        let data = await fetchFilms.getTitle(title); //{}
        //res.status(200).json(data); //para poder visulizar el json
        res.status(200).render("films_view.pug", data); //cambiar a .render y dibujar film_view.pug
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

const postTitle = async (req, res) => {
    try {
        const title = req.body.title;
        res.redirect("/film/" + title)
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    getTitle,
    postTitle
}