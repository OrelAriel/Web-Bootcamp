const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winScoreSelect = document.querySelector('#playTo');

let = p1Score = 0;
let p2Score = 0;
let winScore = 3;
let isGameOver = false

p1Button.addEventListener('click', function() {
    if (!isGameOver){
        p1Score += 1;
        if (p1Score === winScore){
            isGameOver = true;
            p1Display.classList.add('winner')
            p2Display.classList.add('loser')
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener('click', function() {
    if (!isGameOver){
        p2Score += 1;
        if (p2Score === winScore){
            isGameOver = true;
            p2Display.classList.add('winner')
            p1Display.classList.add('loser')
        }
        p2Display.textContent = p2Score;
    }
})

resetButton.addEventListener('click', reset)

winScoreSelect.addEventListener('change', function(){
    winScore = parseInt(this.value);
    reset();
})

function reset () {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('winner','loser')
    p2Display.classList.remove('winner','loser')
}