let n;

function game(diff) {

    n = diff;

    document.getElementById("header1").innerHTML = "GAME ON";



    if (diff == 0) {
        document.getElementById("header2").innerHTML = "Guess a Number Between 1-10";
    } else if (diff == 1) {
        document.getElementById("header2").innerHTML = "Guess a Number Between 1-30";
    } else {
        document.getElementById("header2").innerHTML = "Guess a Number Between 1-50";
    }

    let v = document.getElementById("button");
    v.parentNode.removeChild(v);

    document.getElementById("inputArea").hidden = false;



}

function checkGuess() {
    let x = document.getElementById("num").value;
    let correctNum;
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
            correctNum = Math.floor(Math.random() * 20) + 1;
        } else {
            correctNum = Math.floor(Math.random() * 30) + 1;
        }

        alert("The Correct Number Was "+ correctNum);

        if (x == correctNum) {
            alert("You guessed correctly");
        } else {
            alert("You guessed Incorrectly");
        }
    } else {
        alert("not in the range");
    }


}

