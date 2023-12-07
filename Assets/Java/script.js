const searchForm = document.getElementById("searchForm");
const searchedMovieInput = document.getElementById("searchedMovie");
async function fetchStreamingApi() {
  const url =
    "https://streaming-availability.p.rapidapi.com/search/title?title=" +
    searchedMovieInput.value +
    "&country=gb&show_type=all&output_language=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6585cb907amshd32413c9b8e2af5p1ca7d2jsn15206a031fc3",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    let movieId;
    for (let index = 0; index < data.result.length; index++) {
      if (data.result[index].type === "movie") {
        movieId = data.result[index].imdbId;
        console.log(movieId);
        break;
      }
    }
    fetchMoviesMiniApi(movieId);
  } catch (error) {
    console.error(error);
  }
}
async function fetchMoviesMiniApi(movie_id) {
  const moviesMiniUrl =
    "https://moviesminidatabase.p.rapidapi.com/movie/id/" + movie_id + "/cast/";
  const moviesMiniOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d707f85ea2msh17d19e6e6585a85p16d8c0jsn733b15f6fe05",
      "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
    },
  };
  fetch(moviesMiniUrl, moviesMiniOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //   imdbApi();
  fetchStreamingApi();
});


var movies = [
  { title: "Movie 1", poster: "path/to/movie1-poster.jpg" },
  { title: "Movie 2", poster: "path/to/movie2-poster.jpg" },
  { title: "Movie 3", poster: "path/to/movie3-poster.jpg" },
  { title: "Movie 4", poster: "path/to/movie3-poster.jpg" }
  
];

// Function to create movie card HTML
function createMovieCard(movie) {
  return `
    <div class="movie-box card">
      <img src="${movie.poster}" class="card-img-top" alt="${movie.title} Poster">
      <div class="card-body">
        <a href="#" class="btn btn-primary">Watch Now</a>
      </div>
    </div>
  `;
}

 // Function to append movie cards to a container
 function appendMovieCards(containerId, moviesArray) {
  var container = $("#" + containerId);
  moviesArray.forEach(function (movie) {
    var cardHtml = createMovieCard(movie);
    container.append(cardHtml);
  });
}

// Append movie cards to respective sections
appendMovieCards("movieCards", movies);
appendMovieCards("actorsCards", movies); 
appendMovieCards("genreCards", movies);

// Call fetchMoviesMiniApi for each movie and update the card data
fetchMoviesMiniApi(movies, function (castData) {
  // Update the movie card with cast information
  updateMovieCard(containerId, movies.title, castData);
});

// Function to update movie card with cast information
function updateMovieCard(containerId, movieTitle, castData) {
var container = $("#" + containerId);
var movieCard = container.find(`[alt="${movieTitle} Poster"]`).closest('.movie-box');

// Add cast information to the movie card
var castList = castData.map(actor => actor.name).join(', ');
var castInfo = `<p><strong>Cast:</strong> ${castList}</p>`;
movieCard.find('.card-body').append(castInfo);
}

// Append movie cards to respective sections
appendMovieCards("movieCards", movies);
// Update the container ID for actors
appendMovieCards("actorsCards", movies);
appendMovieCards("genreCards", movies);

// ...

// Modify the fetchMoviesMiniApi function to accept a callback function
async function fetchMoviesMiniApi(movie, callback) {
const moviesMiniUrl =
"https://moviesminidatabase.p.rapidapi.com/movie/id/" + movie.imdbId + "/cast/";
const moviesMiniOptions = {
method: "GET",
headers: {
  "X-RapidAPI-Key": "d707f85ea2msh17d19e6e6585a85p16d8c0jsn733b15f6fe05",
  "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
},
};

try {
const response = await fetch(moviesMiniUrl, moviesMiniOptions);
const data = await response.json();
callback(data); // Call the callback function with the cast data
} catch (error) {
console.error(error);
}
}





















// async function imdbApi() {
//   const imdbUrl =
//     "https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=" +
//     searchedMovieInput.value;
//   const imdbOptions = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "d707f85ea2msh17d19e6e6585a85p16d8c0jsn733b15f6fe05",
//       "X-RapidAPI-Host": "imdb188.p.rapidapi.com",
//     },
//   };
//   try {
//     const response = await fetch(imdbUrl, imdbOptions);
//     const data = await response.json();
//     var movieId;
//     // console.log(data);
//     fetchMoviesMiniApi(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
