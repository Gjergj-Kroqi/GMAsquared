let n;
let num;
let attempts = 3;

function game(diff) {

    n = diff;

    document.getElementById("header1").innerHTML = "GAME ON";


    if (diff == 0) {
        document.getElementById("header2").innerHTML = "Guess a Number Between 1-10";
        x = generateNum(diff);
    } else if (diff == 1) {
        document.getElementById("header2").innerHTML = "Guess a Number Between 1-30";
        x = generateNum(diff);
    } else {
        document.getElementById("header2").innerHTML = "Guess a Number Between 1-50";
        x = generateNum(diff);
    }

    let v = document.getElementById("button");
    v.parentNode.removeChild(v);

    document.getElementById("inputArea").hidden = false;
    document.getElementById("refresh").hidden = false;

}

function generateNum(n) {
    if (n == 0) {
        correctNum = Math.floor(Math.random() * 10) + 1;
    } else if (n == 1) {
        correctNum = Math.floor(Math.random() * 30) + 1;
    } else {
        correctNum = Math.floor(Math.random() * 50) + 1;
    }

    num = correctNum;

    return correctNum;

}

function checkGuess() {
    let x = document.getElementById("num").value;
    let correctNum = num;
    let condition;


    if (n == 0) {
        if (x >= 1 && x <= 10) {
            condition = true;
        } else {
            condition = false
        }
    } else if (n == 1) {
        if (x >= 1 && x <= 30) {
            condition = true;
        } else {
            condition = false
        }
    } else {
        if (x >= 1 && x <= 50) {
            condition = true;
        } else {
            condition = false
        }
    }

    if (condition == true) {
        if (n == 0) {
            correctNum = Math.floor(Math.random() * 10) + 1;
        } else if (n == 1) {
            correctNum = Math.floor(Math.random() * 30) + 1;
        } else {
            correctNum = Math.floor(Math.random() * 50) + 1;
        }

        alert("The Correct Number Was " + correctNum);

        if (x == correctNum) {
            alert("You guessed correctly");
        } else {
            alert("You guessed Incorrectly");
            attempts--;
            if (attempts == 0) {
                alert("You ran out of attempts. You will be redirected to the Main Menu");
                location.reload();
            }
            if (attempts != 1) {
                document.getElementById("attempts").innerHTML = "You Have " + attempts + " Attempts Left"
            } else {
                document.getElementById("attempts").innerHTML = "You Have " + attempts + " Attempt Left"
            }
        }
    } else {
        alert("not in the range");
    }

}