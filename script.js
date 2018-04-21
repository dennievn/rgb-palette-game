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
alert("WHAT IS RGB: The rgb(red, green, blue) Color Model is used to represent the colors on a electronic display. Each color uses a combination of decimals numbers ranging from 0 to 255 to form a wide array of colors. Example: Blue = rgb(0, 0, 255) because there are no reds and greens. Purple = rgb(128, 0, 128) because we all know that purple is a combination of red and blue mixed. HOW TO PLAY: The screen will display a rgb number and it is your job to select the circle that matches the right color code. The backdrop will change color if you guessed it right and the uncorrect circle will fadeout if you guessed it wrong. You have an option of selecting Easy Mode which will give you only 3 circles to choose from, and you are also welcome to shuffle a new color anytime if you are stuck. HAVE FUN!");
