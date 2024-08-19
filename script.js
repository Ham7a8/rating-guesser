// Movies list
const moviesList = [
    "Toy Story", "Antz", "A Bug's Life", "Toy Story 2", "Shrek", 
    "Final Fantasy: The Spirits Within", "The Living Forest", 
    "Monsters, Inc.", "Jimmy Neutron: Boy Genius", "Ice Age", 
    "Jonah: A VeggieTales Movie", "Finding Nemo", "Kaena: The Prophecy", 
    "Boo, Zino & the Snurks", "Terkel in Trouble", "Shrek 2", 
    "Shark Tale", "The Polar Express", "The Incredibles", 
    "The Magic Roundabout", "Robots", "Valiant", "Madagascar", "Ark", 
    "Final Fantasy VII: Advent Children", "Chicken Little", "Hoodwinked!", 
    "Thru the Moebius Strip", "Free Jimmy", "Ice Age: The Meltdown", 
    "The Wild", "Over the Hedge", "Cars", "Monster House", 
    "The Reef", "The Ant Bully", "Impy's Island", "Barnyard", 
    "Keisarin salaisuus", "The Ugly Duckling and Me!", "Everyone's Hero", 
    "Open Season", "Azur & Asmar: The Princes' Quest", "Flushed Away", 
    "Happy Feet", "Happily N'Ever After", "Meet the Robinsons", 
    "TMNT", "Shrek the Third", "Surf's Up"
];

// Mock function to get movie ratings
function getMovieRating(movieName) {
    // In a real application, replace this with an API call to fetch actual movie ratings
    const mockRatings = {
        "Toy Story": 8.3, "Antz": 6.5, "A Bug's Life": 7.2, "Toy Story 2": 7.9, "Shrek": 7.9,
        "Final Fantasy: The Spirits Within": 6.4, "The Living Forest": 5.7, "Monsters, Inc.": 8.1,
        "Jimmy Neutron: Boy Genius": 5.8, "Ice Age": 7.5, "Jonah: A VeggieTales Movie": 6.0,
        "Finding Nemo": 8.1, "Kaena: The Prophecy": 6.0, "Boo, Zino & the Snurks": 5.5, "Terkel in Trouble": 6.3,
        "Shrek 2": 7.2, "Shark Tale": 6.0, "The Polar Express": 6.6, "The Incredibles": 8.0,
        "The Magic Roundabout": 5.6, "Robots": 6.3, "Valiant": 5.6, "Madagascar": 6.9,
        "Ark": 5.5, "Final Fantasy VII: Advent Children": 7.2, "Chicken Little": 5.8, "Hoodwinked!": 6.0,
        "Thru the Moebius Strip": 6.2, "Free Jimmy": 5.8, "Ice Age: The Meltdown": 6.8,
        "The Wild": 5.4, "Over the Hedge": 6.1, "Cars": 6.8, "Monster House": 6.6,
        "The Reef": 5.7, "The Ant Bully": 5.8, "Impy's Island": 5.5, "Barnyard": 5.8,
        "Keisarin salaisuus": 6.2, "The Ugly Duckling and Me!": 6.1, "Everyone's Hero": 5.7,
        "Open Season": 6.1, "Azur & Asmar: The Princes' Quest": 6.7, "Flushed Away": 6.7,
        "Happy Feet": 6.4, "Happily N'Ever After": 5.4, "Meet the Robinsons": 6.6,
        "TMNT": 6.1, "Shrek the Third": 6.0, "Surf's Up": 6.7
    };
    return mockRatings[movieName] || 0;
}

let rating1, rating2, movie1, movie2, correctChoice;

function playGame() {
    movie1 = moviesList[Math.floor(Math.random() * moviesList.length)];
    movie2 = moviesList[Math.floor(Math.random() * moviesList.length)];
    
    // Ensure the two movies are not the same
    while (movie1 === movie2) {
        movie2 = moviesList[Math.floor(Math.random() * moviesList.length)];
    }

    rating1 = getMovieRating(movie1);
    rating2 = getMovieRating(movie2);

    // Display movie names and reset ratings display
    document.getElementById('movie1').textContent = `1: ${movie1}`;
    document.getElementById('movie2').textContent = `2: ${movie2}`;

    document.getElementById('rating1').textContent = '';
    document.getElementById('rating2').textContent = '';
    document.getElementById('result').textContent = '';
    document.getElementById('nextBtn').style.display = 'none';
}

function checkAnswer() {
    const userChoice = document.querySelector('input[name="choice"]:checked').value;
    correctChoice = rating1 > rating2 ? '1' : '2';

    // Display correct/incorrect message
    if (userChoice === correctChoice) {
        document.getElementById('result').textContent = 'Correct!';
    } else {
        document.getElementById('result').textContent = 'Wrong!';
    }

    // Display ratings with movie names
    document.getElementById('rating1').textContent = `${movie1} Rating: ${rating1}`;
    document.getElementById('rating2').textContent = `${movie2} Rating: ${rating2}`;

    // Show the "Next" button
    document.getElementById('nextBtn').style.display = 'block';
}

document.getElementById('submitBtn').onclick = checkAnswer;
document.getElementById('nextBtn').onclick = playGame;

// Start the game on page load
window.onload = playGame;
