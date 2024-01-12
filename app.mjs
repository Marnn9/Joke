import chalk from "chalk";

function randomColor() {
    return Math.floor(Math.random() * 256); // Generate random values in the range [0, 255]
}

const joke = "Why don't skeletons fight each other? Because they don't have the guts!";
const words = joke.split(' '); 

const coloredText = words.reduce((accumulator, word, index) => {
    const colorValueA = randomColor();
    const colorValueB = randomColor();
    const colorValueC = randomColor();

    const color = chalk.rgb(colorValueA, colorValueB, colorValueC);
    accumulator += color(word);
    
    if(index !== words.length - 1) {
        accumulator += ' '; // Add space between words except for the last word
    }
    return accumulator;
}, '');

console.log(coloredText); // Output the colored text as a single line
