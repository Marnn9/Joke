import chalk from "chalk";

let colorValueA, colorValueB, colorValueC; 

function randomColor (){
    colorValueA = Math.floor(Math.random() * 255);
    colorValueB = Math.floor(Math.random() * 255);
    colorValueC = Math.floor(Math.random() * 255);
}

const joke = "Why don't skeletons fight each other? Because they don't have the guts!";
const words = joke.split(' '); 
let coloredText = '';

words.forEach(function colorWords(word, index){
    randomColor();
    const color = chalk.rgb(colorValueA, colorValueB, colorValueC);
    coloredText += color(word);
    if(index !== words.length - 1) {
        coloredText += ' '; // Add space between words except for the last word
    }
});

console.log(coloredText); // Output the colored text as a single line
