// retrieves value stored in the local storage
var data = JSON.parse(localStorage.getItem('data'))
console.log(data)

var actorscard = document.getElementById('actorsCards')
actorscard.innerHTML = `<div id="" class="movie-box card">
<img src="${data.data[1].image}" class="card-img-top" alt="Movie Poster">
<h3> ${data.data[1].title} </h3>
<h6> ${data.data[1].year} </h6>
<h5> ${data.data[1].stars} <h5>
<div class="card-body">
  <a href="#" id="submitBtn" class="btn btn-primary">Watch Now</a>
</div>
</div>`
