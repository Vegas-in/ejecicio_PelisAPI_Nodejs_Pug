const router = require('express').Router();
const filmsController = require('../controllers/films_controller');



//router.get("/home");

router.get("/:title", filmsController.getTitle);

router.post("/", filmsController.postTitle);



module.exports = router;