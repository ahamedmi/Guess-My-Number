'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector(".message").textContent = "Correct number";
console.log(document.querySelector(".message").textContent = "Correct number");

document.querySelector(".number").textContent = 20;
document.querySelector(".score").textContent = 13;

document.querySelector(".guess").value = 32;
console.log(document.querySelector(".guess").value); */

let secretNumber = Math.trunc((Math.random() * 20)) + 1;
function Message(msg) {
    document.querySelector(".message").textContent = msg;
}
function Score(scr) {
    document.querySelector(".score").textContent = scr;
}
function Body(bdy) {
    document.querySelector("body").textContent = bdy;
}
function number(num) {
    document.querySelector(".number").textContent = num;
}
function HighScore(hscr) {
    document.querySelector(".highscore").textContent = hscr;
}

console.log(typeof secretNumber);

let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
    //console.log(document.querySelector(".guess").value)
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    if (!guess) {
        //document.querySelector(".message").textContent = "No numbers";
        Message("No numbers");
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            //document.querySelector(".message").textContent = guess > secretNumber ? "Number is too high" : "Number is too low";
            Message(guess > secretNumber ? "Number is too high" : "Number is too low");
            score--
            //document.querySelector(".score").textContent = score;
            Score(score);
        }
        else {
            //document.querySelector(".message").textContent = "you lost the game";
            Message("you lost the game");
            //document.querySelector(".score").textContent = 0;
            Score(0);

        }
    }


    else if (guess === secretNumber) {
        //document.querySelector(".message").textContent = "correct numbers"
        Message("correct numbers");
        document.querySelector("body").style.backgroundColor = "green";

        document.querySelector(".number").style.width = "30rem";

        //document.querySelector(".number").textContent = secretNumber;
        number(secretNumber);
        if (score > highScore) {
            highScore = score;
            //document.querySelector(".highscore").textContent = highScore;
            HighScore(highScore);
        }

    }

    /*else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Number is too high";
            score--
            document.querySelector(".score").textContent = score
        }
        else {
            document.querySelector(".message").textContent = "you lost the game";
            document.querySelector(".score").textContent = 0;
        }

    }
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Number is too low";
            score--
            document.querySelector(".score").textContent = score
        }
        else {
            document.querySelector(".message").textContent = "you lost the game";
            document.querySelector(".score").textContent = 0;

        }
    }*/


})

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc((Math.random() * 20)) + 1;
    //document.querySelector(".score").textContent = score;
    Score(score);
    //document.querySelector(".number").textContent = "?";
    number("?");
    //document.querySelector(".message").textContent = "Start guessing...";
    Message("Start guessing...");
    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".number").style.width = "15rem";

    document.querySelector(".guess").value = "";
})