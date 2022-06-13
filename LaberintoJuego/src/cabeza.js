

var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");
 
function drawTriangle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  // the triangle
  context.beginPath();
  context.moveTo(200 + deltaX, 100 + deltaY);
  context.lineTo(170 + deltaX, 150 + deltaY);
  context.lineTo(230 + deltaX, 150 + deltaY);
  context.closePath();
 
  // the outline
  context.lineWidth = 10;
  context.strokeStyle = "rgba(102, 102, 102, 1)";
  context.stroke();
 
  // the fill color
  context.fillStyle = "rgba(255, 204, 0, 1)";
  context.fill();
}
drawTriangle();

//-------------------------------------------------------------

var deltaX = 0;
var deltaY = 0;
 
window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);
 
var keys = [];
 
function keysPressed(e) {
    // store an entry for every key pressed
    keys[e.keyCode] = true;
    // left
    if (keys[37]) {
      deltaX -= 2;
    } 
    // right
    if (keys[39]) {
      deltaX += 2;
    } 
    // down
    if (keys[38]) {
      deltaY -= 2;
    } 
    // up
    if (keys[40]) {
      deltaY += 2;
    }
    e.preventDefault(); 
    drawTriangle();
}
 
function keysReleased(e) {
    // mark keys that were released
    keys[e.keyCode] = false;
}


//codigo no necesario---------------------------------


//window.addEventListener("keydown", moveSomething, false);
  
// var deltaX = 0;
// var deltaY = 0;

// function moveSomething(e) {
//     switch(e.keyCode) {
//         case 37:
//             deltaX -= 2;
//             break;
//         case 38:
//             deltaY -= 2;
//             break;
//         case 39:
//             deltaX += 2;
//             break;
//         case 40:
//             deltaY += 2;
//             break;
//     }
//     e.preventDefault();

//     drawTriangle();
// }