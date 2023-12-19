apiUrl = "https://moviesminidatabase.p.rapidapi.com/movie/byYear/2010/";


function fetchApiData() {
 
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6f2fe1757dmsh5e166be4bbf928fp16f27djsn4221c0b32636",
        "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
      },
    };

    // Fetching data from the API
    fetch(apiUrl, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        // fetchMoviesImageApi(data.results[0].imdb_id)
        for (let i = 0;  i < 3; i++) {
          const element = data.results[i];
          console.log(element);
          fetchMoviesImageApi(element.imdb_id)
        }
        
      });
};
fetchApiData();

function fetchMoviesImageApi(id) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '486abaa088msh3e163fec6b2d7f5p104d18jsn35204f2ab3cb',
      'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
    }
  };
  const apiUrl = `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${id}`;
  fetch(apiUrl, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      console.log(res);
      const imageLink = res.data[0].image
      //create cards
        // Creating a movie container element
        const movieCards = document.getElementById("movieCards");
        // Iterating over the movies in the fetched data
        const card = `<div id="${id}" class="movie-box card">
        <img src="${imageLink}" class="card-img-top" alt="Movie Poster">
        <div class="card-body">
        <p class="card-title bg-light">${res.data[0].title}</p>
          <a href="/#" id="releaseSubmitBtn" class="btn btn-primary">Watch Now</a>
        </div>
    </div>`

   movieCards.innerHTML+=card
    });
}



