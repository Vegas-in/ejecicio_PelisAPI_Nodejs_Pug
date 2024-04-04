const express = require("express");
const app = express();
const port = 3000;



const filmsRoutes = require("./routes/films_routes");

app.use(express.urlencoded({ extended: true })); // Envío de formularios

//app.use(express.json());

app.set('view engine', 'pug');
app.set('views', './views');

app.get("/", (req, res) => {
    res.status(200).send("Home. Welcome to backend!");
});

    // http://localhost:3000/home
app.get('/home', function (req, res) {
    res.render('home_view.pug');
});

app.use("/film", filmsRoutes)


// http://localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
});

