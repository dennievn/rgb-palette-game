/*
    DECLARING ALL RGB COLORS INSIDE ARRAY
    SELECTING ALL THE square DIVS
*/
var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

// easy || hard mode selection
function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // ternary operator - condition ? expr1: expr2;
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }
}
function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedSquare = this.style.backgroundColor;
            if(clickedSquare === pickedColor){
                messageDisplay.textContent = "YOU'RE CORRECT!";
                resetButton.textContent = "Play Again?";
                changeColor(clickedSquare);
                h1.style.backgroundColor = clickedSquare;
            } else {
                this.style.backgroundColor = "#250e0e";
                messageDisplay.textContent = "TRY AGAIN";
                }
            });
        }
}
function reset(){
    colors = colorGenerator(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
            }
        }
        h1.style.backgroundColor = "#250e0e";
    }

resetButton.addEventListener("click", function(){
    reset();
});

function changeColor(colors){
    for(var i = 0; i < squares.length; i++){
        // CHANGE REST OF SQUARES TO MATCH THE CORRECT COLOR
        squares[i].style.backgroundColor = colors;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function colorGenerator(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}
/* 
    ACTUALLY IS GENERATING 3 DIFFERENT NUMBER BETWEEN 0 - 255 AND THEN COMBINING THEM TO FORM OUR RGB
*/
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
