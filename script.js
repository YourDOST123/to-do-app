const bookRepository = {
    "fantasy": {
        "happy": [
            "The Hobbit by J.R.R. Tolkien",
            "Harry Potter and the Sorcerer's Stone by J.K. Rowling",
            // Add more titles as needed
        ],
        "sad": [
            "The Book Thief by Markus Zusak",
            // Add more titles as needed
        ],
        // Add other moods and their books
    },
    "sci-fi": {
        "excited": [
            "Dune by Frank Herbert",
            "Ender's Game by Orson Scott Card",
            // Add more titles as needed
        ],
        "relaxed": [
            "The Long Way to a Small, Angry Planet by Becky Chambers",
            // Add more titles as needed
        ],
        // Add other moods and their books
    },
    // Add other genres and their books
};

function getRecommendation() {
    const genreSelect = document.getElementById('genre-select');
    const moodSelect = document.getElementById('mood-select');
    const recommendationElement = document.getElementById('recommendation');

    const genre = genreSelect.value;
    const mood = moodSelect.value;

    if (genre && mood && bookRepository[genre] && bookRepository[genre][mood]) {
        const books = bookRepository[genre][mood];
        recommendationElement.innerHTML = `<p>We recommend: ${books.join("<br>")}</p>`;
    } else {
        recommendationElement.innerHTML = "<p>Please select both a genre and a mood to get a recommendation.</p>";
    }
}
