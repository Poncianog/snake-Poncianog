var snake;
var snakeLength;
var snakeSize;

var context;
var screenWidth;
var screenHeight;

gameInitialize();
gameDraw();

function gameInitialize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}

function gameLoop() {
    
}

function gameDraw() {
     context.fillStyle = "rgb(113, 245, 163)";
     context.fillRect(0, 0, screenWidth, screenHeight);
}

function snakeInitialize() {
    snake = [];
    snakeLenght = 2;
    snaleSize = 20;
    
    for(var index = 0; index < snakeLength; index++) {
        snake.push( {
            x: index,
            y: 0
        });
    }
}

function snakeDraw() {
    for(var index = 0; index < snake.length; index++) {
        context.fillStyle = "white";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize);
    }
}

function snakeUpdate(){
    
}