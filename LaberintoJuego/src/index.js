//variables globalesrestart-btnrestart-btn

let splashScreen = document.querySelector("#splash-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let winGameScreen = document.querySelector("#wingame-screen");
const canvas = document.querySelector("#canvas");

//para botones de restart y volver a menu
const restartGame = document.getElementById("restart-btn");
const goToMenu = document.getElementById("back-to-menu");
const restartGame2 = document.getElementById("restart-btn2");
const goToMenu2 = document.getElementById("back-to-menu2");
//ctx
const ctx = canvas.getContext("2d");
// juego está activo o no
let checkIfGameIsRunning = false;

//Inicio juego-->mostrar canvas
const startGame = () => {
    checkIfGameIsRunning = true;
    if (checkIfGameIsRunning) {
      splashScreen.style.display = "none";
      canvas.style.display = "flex";
      gameOverScreen.style.display = "none";
      winGameScreen.style.display = "none";
    }
};

//imagen cabeza
let cabezaImagen = new Image();
cabezaImagen.src = "img/cabeza2.png";

//imagenes muros exteriores
let pared450x30Imagen = new Image();
pared450x30Imagen.src = "img/pared450x30.png";

let pared1140x30Imagen = new Image();
pared1140x30Imagen.src = "img/pared1140x30.png";

let pared30x640Imagen = new Image();
pared30x640Imagen.src = "img/pared30x640.png";

let pared30x110Imagen = new Image();
pared30x110Imagen.src = "img/pared30x110.png";

let pared30x440Imagen = new Image();
pared30x440Imagen.src = "img/pared30x440.png";

let pared360x30Imagen = new Image();
pared360x30Imagen.src = "img/pared360x30.png";

let pared690x30Imagen = new Image();
pared690x30Imagen.src = "img/pared690x30.png";

//imagenes muros anchos
let pared110x20Imagen = new Image();
pared110x20Imagen.src = "img/paredesanchas/pared110x20.png";

let pared130x20Imagen = new Image();
pared130x20Imagen.src = "img/paredesanchas/pared130x20.png";

let pared220x20Imagen = new Image();
pared220x20Imagen.src = "img/paredesanchas/pared220x20.png";

let pared240x20Imagen = new Image();
pared240x20Imagen.src = "img/paredesanchas/pared240x20.png";

let pared350x20Imagen = new Image();
pared350x20Imagen.src = "img/paredesanchas/pared350x20.png";

let pared900x20Imagen = new Image();
pared900x20Imagen.src = "img/paredesanchas/pared900x20.png";

//imagenes muros altos

let pared20x90Imagen = new Image();
pared20x90Imagen.src = "img/paredesaltas/pared20x90.png";

let pared20x110Imagen = new Image();
pared20x110Imagen.src = "img/paredesaltas/pared20x110.png";

let pared20x130Imagen = new Image();
pared20x130Imagen.src = "img/paredesaltas/pared20x130.png";

let pared20x200Imagen = new Image();
pared20x200Imagen.src = "img/paredesaltas/pared20x200.png";

let gameOver = false

let limpiarInterval; 

//Dibujando imágenes en el canvas
//cabeza
const cabeza = new Objeto(380, 650, 40, 40, cabezaImagen, ctx);
//muros exteriores
const pared1 = new Objeto (0, 0, 1140, 30, pared1140x30Imagen, ctx);
const pared2 = new Objeto (0, 30, 30, 640, pared30x640Imagen, ctx);
const pared3 = new Objeto (1110, 30, 30, 110, pared30x110Imagen, ctx);
const pared4 = new Objeto (1110, 230, 30, 440, pared30x440Imagen, ctx);
const pared5 = new Objeto (0, 670, 360, 30, pared360x30Imagen, ctx);
const pared6 = new Objeto (450, 670, 690, 30, pared690x30Imagen, ctx);
//muros anchos
const pared7 = new Objeto (120, 120, 900, 20, pared900x20Imagen, ctx);
const pared8 = new Objeto (30, 230, 110, 20, pared110x20Imagen, ctx);
const pared9 = new Objeto (340, 230, 350, 20, pared350x20Imagen, ctx);
const pared10 = new Objeto (890, 230, 220, 20, pared220x20Imagen, ctx);
const pared11 = new Objeto (120, 340, 130, 20, pared130x20Imagen, ctx);
const pared12 = new Objeto (340, 340, 130, 20, pared130x20Imagen, ctx);
const pared13 = new Objeto (670, 340, 240, 20, pared240x20Imagen, ctx);
const pared14 = new Objeto (120, 450, 900, 20, pared900x20Imagen, ctx);
const pared15 = new Objeto (230, 560, 350, 20, pared350x20Imagen, ctx);
const pared16 = new Objeto (780, 560, 240, 20, pared240x20Imagen, ctx);
//muros altos
const pared17 = new Objeto (120, 470, 20, 200, pared20x200Imagen, ctx);
const pared18 = new Objeto (230, 140, 20, 200, pared20x200Imagen, ctx);
const pared19 = new Objeto (340, 250, 20, 90, pared20x90Imagen, ctx);
const pared20 = new Objeto (450, 580, 20, 90, pared20x90Imagen, ctx);
const pared21 = new Objeto (560, 250, 20, 200, pared20x200Imagen, ctx);
const pared22 = new Objeto (670, 470, 20, 130, pared20x130Imagen, ctx);
const pared23 = new Objeto (780, 580, 20, 90, pared20x90Imagen, ctx);
const pared24 = new Objeto (780, 140, 20, 200, pared20x200Imagen, ctx);
const pared25 = new Objeto (890, 250, 20, 90, pared20x90Imagen, ctx);
const pared26 = new Objeto (1000, 340, 20, 110, pared20x110Imagen, ctx);

//cargando imagenes e iniciando interval
const cargaInicial = () => {
    cabeza.dibujar();
    pared1.dibujar();
    pared2.dibujar();
    pared3.dibujar();
    pared4.dibujar();
    pared5.dibujar();
    pared6.dibujar();
    pared7.dibujar();
    pared8.dibujar();
    pared9.dibujar();
    pared10.dibujar();
    pared11.dibujar();
    pared12.dibujar();
    pared13.dibujar();
    pared14.dibujar();
    pared15.dibujar();
    pared16.dibujar();
    pared17.dibujar();
    pared18.dibujar();
    pared19.dibujar();
    pared20.dibujar();
    pared21.dibujar();
    pared22.dibujar();
    pared23.dibujar();
    pared24.dibujar();
    pared25.dibujar();
    pared26.dibujar();
    limpiarInterval = setInterval(jugar, 10);
};

//detectando colisiones-->gameOver, incluye win
const jugar = () => {
    if (cabeza.detectarColision(pared1)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
       gameOver = true 
       if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
           
           // seria ir a la página de inicio

           // Ocultar el canvas 
        }
    }
    else if (cabeza.detectarColision(pared2)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared3)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared4)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared5)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared6)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared7)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared8)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared9)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared10)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared11)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared12)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared13)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared14)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared15)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared16)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared17)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared18)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared19)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared20)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared21)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared22)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared23)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared24)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared25)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared26)) {
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }

    else if (cabeza.x == 1100 && cabeza.y > 140 && cabeza.y < 230) {
        canvas.style.display = "none";
        winGameScreen.style.display = "flex";
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 380;
           cabeza.y = 650;
           cabeza.dibujar();
        }
    }
}

//movimiento cabeza
const moverCabeza = (e) => {
    cabeza.borrar();
    if (e.key === "ArrowLeft") {
        if (cabeza.x > 0) {
            cabeza.x -= 5;
      }
    }
    if (e.key === "ArrowRight") {
        if (cabeza.x < 1100) {
            cabeza.x += 5;
      }
    }
    if (e.key === "ArrowUp") {
        if (cabeza.y > 0) {
            cabeza.y -= 5;}
    }
    if (e.key === "ArrowDown") {
        if (cabeza.y < 660) {
            cabeza.y += 5;
        }
    }
    cabeza.dibujar();
};

let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);

restartGame.addEventListener("click", () => {
    checkIfGameIsRunning = false;
    startGame();
});
  
goToMenu.addEventListener("click", () => {
    window.location.reload();
});

restartGame2.addEventListener("click", () => {
    checkIfGameIsRunning = false;
    startGame();
});
  
goToMenu2.addEventListener("click", () => {
    window.location.reload();
});

window.addEventListener("load", cargaInicial);

window.addEventListener("keydown", moverCabeza);

