apiUrl = "https://moviesminidatabase.p.rapidapi.com/movie/byYear/2010/";
function fetchMovieApiData() {
 
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
          // console.log(element);
          fetchMoviesYearImageApi(element.imdb_id)
        }
        
      });
};
fetchMovieApiData();

function fetchMoviesYearImageApi(id) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5981d9998emshf856bd7143121d2p179d42jsnf566e4d82ac7',
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




// // fetching the movie using the actor name
apiUrl = "https://moviesminidatabase.p.rapidapi.com/actor/imdb_id_byName/dwayne/";
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
        // fetchMoviesActorImageApi(data.results[0].imdb_id)
        for (let i = 0;  i < 3; i++) {
          const element = data.results[i];
          console.log(element);
          fetchMoviesActorImageApi(element.imdb_id)
        }
        
      });
};
fetchApiData();

function fetchMoviesActorImageApi(id) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5981d9998emshf856bd7143121d2p179d42jsnf566e4d82ac7',
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
        const actorCards = document.getElementById("actorsCards");
        // Iterating over the movies in the fetched data
        const cards = `<div id="${id}" class="movie-box card">
        <img src="${imageLink}" class="card-img-top" alt="Movie Poster">
        <div class="card-body">
        <p class="card-title bg-light">${res.data[0].stars}</p>
          <a href="/#" id="releaseSubmitBtn" class="btn btn-primary">Watch Now</a>
        </div>
    </div>`

   actorCards.innerHTML+=cards
    });
  }


  apiUrl = "https://moviesminidatabase.p.rapidapi.com/actor/imdb_id_byName/dwayne/";
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
        // fetchMoviesActorImageApi(data.results[0].imdb_id)
        for (let i = 0;  i < 3; i++) {
          const element = data.results[i];
          console.log(element);
          fetchMoviesActorImageApi(element.imdb_id)
        }
        
      });
};
fetchApiData();

function fetchMoviesActorImageApi(id) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5981d9998emshf856bd7143121d2p179d42jsnf566e4d82ac7',
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
        const actorCards = document.getElementById("actorsCards");
        // Iterating over the movies in the fetched data
        const cards = `<div id="${id}" class="movie-box card">
        <img src="${imageLink}" class="card-img-top" alt="Movie Poster">
        <div class="card-body">
        <p class="card-title bg-light">${res.data[0].stars}</p>
          <a href="/#" id="releaseSubmitBtn" class="btn btn-primary">Watch Now</a>
        </div>
    </div>`

   actorCards.innerHTML+=cards
    });
  }


// // Add event listner to the user facing element
// var dropdownEl = document.getElementsByClassName('dropdown-item');
// for (let i = 0; i < dropdownEl.length; i++) {
//   const element = dropdownEl[i];
//   element.addEventListener('click',(e)=>{
//     e.target.textContent;
//   })
// }
// // Fetch Api of the year user clicked on
// console.log(dropdownEl);
// // Implement Api to the Api using Jquery or GetElementByIdOrClass

