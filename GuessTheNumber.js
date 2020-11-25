let maximum = parseInt(prompt("Please Enter The Maximiun Number!"))
while(!maximum){
        maximum = parseInt(prompt("Please Enter a Valid Maximiun Number!"))
}
const targetNumber = Math.floor(Math.random()*maximum)+1;

let guess = parseInt(prompt("Enter a Guess"))
let numberOfGuess = 1;
while (guess !== targetNumber){
    numberOfGuess ++;
    if(guess > targetNumber){
        guess = parseInt(prompt("Too High, Please Enter a New Guess"));
    } else {
        guess = parseInt(prompt("Too Low, Please Enter a New Guess"));
    }
}
console.log(`You Got It!!! It Took You ${numberOfGuess} Guess`)