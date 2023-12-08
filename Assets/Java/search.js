function executeSearch(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Get the value from the search box
    var searchValue = document.getElementById("searchBox").value;
    // Check if there is at least one letter in the search box
    if (/^[a-zA-Z]+$/.test(searchValue)) {
        // Execute your search code here or redirect to the search page
        window.location.href = "./mainPage.html";
    } else {
        // Display an error message or take appropriate action
        alert("Please enter at least one letter in the search box.");
    }
}