

function fetchApiData() {
  let apiUrl = "https://moviesminidatabase.p.rapidapi.com/movie/byYear/2010/";

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
        //create cards
        // Creating a movie container element
        // const movieCards = document.getElementById("movieCards");
        // Iterating over the movies in the fetched data
      });
};
fetchApiData();

function fetchMoviesImageApi(id) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c13ecf3598msh3c858de3366c876p1e7d06jsna348d6c32c03',
      'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
    }
  };
  const apiUrl = `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${id}`;
  fetch(apiUrl, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      // const imageLink = res.data[0].image
      // return imageLink
      console.log(res);
    });
}
fetchMoviesImageApi("tt1014759")
