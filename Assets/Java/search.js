// performs search in HTML element id = searchForm
var searchForm = document.getElementById('searchForm')
var data =  []
// blocks blank search, won't redirect to searchPage or call the moviedatabase API
async function performSearch(event) {
    event.preventDefault()
    // extracts the search input
    const searchInput = document.getElementById('searchInput').value.trim();
    const resultMessage = document.getElementById('resultMessage');

    console.log(searchInput);
    // Checks if the search input is empty string so we prevent unnecessary API calls
    if (searchInput === '') {
        resultMessage.textContent = 'Please enter a search keyword, movie title.';
        return;
    }

    // movieminidatabase API call with input value
    const url = `https://moviesminidatabase.p.rapidapi.com/movie/byKeywords/${searchInput}/`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6f2fe1757dmsh5e166be4bbf928fp16f27djsn4221c0b32636',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        getSearchImdb(result, searchInput)


        // API response
        resultMessage.textContent = `Search successful. Received data: ${result}`;
    } catch (error) {
        console.error(error);
        resultMessage.textContent = 'Error occurred during the search.';
    }
}
// gets the results from moviedatabase, extracts imdb_id and makes with it another call to IMDB API
async function getSearchImdb(result, searchInput) {
    const index = result.results.findIndex(data => data.title.toLowerCase() === searchInput.toLowerCase())
    const url = `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${result.results[index].imdb_id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c13ecf3598msh3c858de3366c876p1e7d06jsna348d6c32c03',
            'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
        }
    };
// store date on user's local storage, data conversion to JSON string befofe stored
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        data = result
        localStorage.setItem('data', JSON.stringify(data))
        location.href = './searchPage.html'
    } catch (error) {
        console.error(error);
    }
}
searchForm.addEventListener('submit', performSearch)