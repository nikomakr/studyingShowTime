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
