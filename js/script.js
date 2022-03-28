


$(document).ready(function () {
  
  $("form#arrays").submit(function(event) {
    event.preventDefault();
    movieInput = $("input#movie").val();
    let favoriteMovies = [movieInput]
    console.log(favoriteMovies);
    addMovies(favoriteMovies);
    $(".output").text(favoriteMovies);
    console.log(favoriteMovies);

  function addMovies(title) {
    toString(favoriteMovies.push(title));
  }

  });
});

