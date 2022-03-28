let favoriteMovies = [];

function addMovies(title) {
  favoriteMovies.push(title);
}


$(document).ready(function () {
  
  $("form#arrays").submit(function(event) {
    event.preventDefault();
    movieInput = $("input#movie").val();
    console.log(favoriteMovies);
    addMovies(favoriteMovies);
    $(".output").text(favoriteMovies);
    console.log(favoriteMovies);

  });
});

