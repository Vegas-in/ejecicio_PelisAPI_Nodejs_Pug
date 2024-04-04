

const getTitle = async (title) => {
    let response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=edf4e569&`); //{} o [{},{},{},{}]
    let films = await response.json(); //{} o [{},{},{},{}]
    console.log(films);
    return films;
  };


/* getTitle("titanic")
    .then(films => {
    console.log(films)
}); */

module.exports = {
    getTitle,
}