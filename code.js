// Function to play the Craps game
function playGame() {
    // Generating 2 random numbers between 1 and 6
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;

    // Calculating the sum of the two numbers
    let sum = die1 + die2;

    // Fetching the output area from the HTML page
    let output = document.getElementById("gameOutput");

    // Displaying the generated numbers and their sum
    output.innerHTML = `Die 1: ${die1} <br> Die 2: ${die2} <br> Sum: ${sum} <br>`;

    // Check game rules
    if (sum === 7 || sum === 11) {
        output.innerHTML += "CRAPS – you lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        output.innerHTML += "You won!";
    } else {
        output.innerHTML += "You pushed!";
    }
}

// Example of another function that takes a parameter and uses this input value and outputs results
function exampleFunction(inputValue) {
    // Assuming the function does some calculation and outputs results
    let result = inputValue * 2; // An example calculation
    return result;
}
