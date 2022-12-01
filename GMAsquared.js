function game(diff) {

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

    x = checkGuess();



}

function checkGuess() {
    let x = document.getElementById("num").value;
    alert(x);

    return x;

}

