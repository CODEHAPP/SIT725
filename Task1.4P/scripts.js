// Function to change the text when the button is clicked
function changeText() {
    // Array of texts to choose from
    var textsArray = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];

    // Generate a random number between 0 and the length of textsArray - 1
    var number = getRandomNumberBetween(0, textsArray.length - 1);

    // Log the index of the selected text for debugging
    console.log("Index: ", number);

    // Change the content of the <h1> element with id "heading"
    document.getElementById("heading").innerHTML = textsArray[number];
}

// Function to generate a random number between a given range
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
