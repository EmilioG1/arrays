let favoriteMovies = []

$(document).ready(function () {
  $("form#arrays").submit(function(event) {
    event.preventDefault();

    movieInput = $("input#movie").val();
    
    favoriteMovies.push(movieInput)

    console.log("fave movies", typeof movieInput);

    $(".output").text(favoriteMovies);

    console.log("From output", favoriteMovies);

  });
});

