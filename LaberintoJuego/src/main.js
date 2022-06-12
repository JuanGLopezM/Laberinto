// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");

// canvas.style.backgroundColor = "green";

// let cabezaImagen = new Image();
// cabezaImagen.src = "img/cabeza2.png";

// let pared1Imagen = new Image();
// pared1Imagen.src = "img/pared1.png";

// let pared2Imagen = new Image();
// pared2Imagen.src = "img/pared2.png";

// let gameOver = false

// let limpiarInterval; 

// const cabeza = new Movimiento (225, 450, 50, 50, cabezaImagen, ctx)

// const pared1 = new Movimiento (0, 0, 200, 500, pared1Imagen, ctx)

// const pared2 = new Movimiento (300, 0, 200, 200, pared2Imagen, ctx)

// const pared3 = new Movimiento (300, 300, 200, 200, pared2Imagen, ctx)

//--------------------------------------------------------------------------------------
let game;
let splashScreen;
let gameScreen;
//let gameOverScreen; //pendiente de crear


//DOM
function buildDom(htmlString) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    return tempDiv.children[0];
}
// function newDom(htmlString) {
//     const newBody = document.body.innerHTML
//     return newBody.insertAdjacentElement(afterbegin, htmlString);
// }

//splashScreen 
function createSplashScreen() {
    splashScreen = buildDom(`
      <main class="main1">
          <h1>LABERINTO</h1>
          <p class="instrucciones">USA LAS FLECHAS PARA JUGAR</p> 
          <p class="instrucciones">USA LAS FLECHAS PARA JUGAR</p> 
          <p class="instrucciones">USA LAS FLECHAS PARA JUGAR</p> 
          <p class="instrucciones">USA LAS FLECHAS PARA JUGAR</p> 
          <div><button id="start-button" onClick="playMusic()">START</button></div>
      </main>
  `);
    document.body.appendChild(splashScreen);
    const startButton = splashScreen.querySelector("button");
    startButton.addEventListener("click", startGame);
}
// function playClick(){  // sonido calavera colision
//     audioClick.currenTime = 0;
//     audioClick.play();
//   }

function playMusic(){
    audio.currentTime = 0;
    audio.volume = 0.1;
    audio.play();
}
function stopMusic(){
    audio.pause();
    audioGameOver.pause();
  }

let audio = new Audio("audio/nightrain.mp3"); //AUDIO GAME
// let audioGameOver = new Audio("audio/lesion_x_bad_feelings_cut.mp3"); //AUDIO GAMOVER
// let audioClick = new Audio("audio/diablo_2_skull_gem_sound.mp3") //AUDIO COLISION
function removeSplashScreen() {
    splashScreen.remove();
}
function startGame() {
    removeSplashScreen();
    // if (gameOverScreen) {
    //   removeGameOverScreen();
    playMusic();
    // }
    createGameScreen();
    
    // game = new Game(gameScreen);
    // game.start();
}

function createGameScreen() {
    
    gameScreen = buildDom(`
        <main>
            <canvas id="canvas" width="500" height="500" style="background: url('img/arena.png')"> "El canvas no rula en tu burra" </canvas>
            <header>
                <div class="time">
                    <span class="label"><b>TIME</b></span>
                    <span class="value"></span>
                </div>
                <div>
                    <button id="play" onClick="playMusic()"><b>MUSIC ON</b></button>
                    <button id="stop" onClick="stopMusic()"><b>MUSIC OFF</b></button>
                </div>
            </header>
        </main>
`);

    document.body.appendChild(gameScreen);
    const musicOnButton = gameScreen.querySelector("#play");
    musicOnButton.addEventListener("click", playMusic);
    const musicOffButton = gameScreen.querySelector("#stop");
    musicOffButton.addEventListener("click", stopMusic);
}

const canvas = document.querySelector("#canvas");
//   const ctx = canvas.getContext("2d");

//   canvas.style.backgroundColor = "green";

//   let cabezaImagen = new Image();
//   cabezaImagen.src = "img/cabeza2.png";

//   let pared1Imagen = new Image();
//   pared1Imagen.src = "img/pared1.png";

//   let pared2Imagen = new Image();
//   pared2Imagen.src = "img/pared2.png";

//   let gameOver = false

//   let limpiarInterval; 

//   const cabeza = new Movimiento (225, 450, 50, 50, cabezaImagen, ctx)

//   const pared1 = new Movimiento (0, 0, 200, 500, pared1Imagen, ctx)

//   const pared2 = new Movimiento (300, 0, 200, 200, pared2Imagen, ctx)

//   const pared3 = new Movimiento (300, 300, 200, 200, pared2Imagen, ctx)

//   const jugar = () => {
//     if (cabeza.detectarColision(pared1)) {
//        alert ("Has muerto. Suerte la próxima vez");
//        gameOver = true 
//        if(gameOver){
//            clearInterval(limpiarInterval);
//            cabeza.borrar();
//            cabeza.x = 225;
//            cabeza.y = 450;
//            cabeza.dibujar();
           
//            // seria ir a la página de inicio

//            // Ocultar el canvas 
//         }
//     }
//     else if (cabeza.detectarColision(pared2)) {
//         alert ("Has muerto. Suerte la próxima vez");
//         gameOver = true 
//         if(gameOver){
//            clearInterval(limpiarInterval);
//            cabeza.borrar();
//            cabeza.x = 225;
//            cabeza.y = 450;
//            cabeza.dibujar();
//         }
//     }
//     else if (cabeza.detectarColision(pared3)) {
//         alert ("Has muerto. Suerte la próxima vez");
//         gameOver = true 
//         if(gameOver){
//            clearInterval(limpiarInterval);
//            cabeza.borrar();
//            cabeza.x = 225;
//            cabeza.y = 450;
//            cabeza.dibujar();
//         }
//     }
// }
// const cargaInicial = () => {
//     cabeza.dibujar();
//     pared1.dibujar();
//     pared2.dibujar();
//     pared3.dibujar();
//     limpiarInterval = setInterval(jugar, 10);
// };

// const moverCabeza = (e) => {
//     cabeza.borrar();
//     if (e.key === "ArrowLeft") {
//         if (cabeza.x > 0) {
//             cabeza.x -= 5;
//       }
//     }
//     if (e.key === "ArrowRight") {
//         if (cabeza.x < 450) {
//             cabeza.x += 5;
//       }
//     }
//     if (e.key === "ArrowUp") {
//         if (cabeza.y > 0) {
//             cabeza.y -= 5;}
//     }
//     if (e.key === "ArrowDown") {
//         if (cabeza.y < 450) {
//             cabeza.y += 5;
//         }
//     }
//     cabeza.dibujar();
// };
    //cargaInicial();
    // moverCabeza();
    
    
    

//---------------------------------------------------------------------------------


// const jugar = () => {
//     if (cabeza.detectarColision(pared1)) {
//        alert ("Has muerto. Suerte la próxima vez");
//        gameOver = true 
//        if(gameOver){
//            clearInterval(limpiarInterval);
//            cabeza.borrar();
//            cabeza.x = 225;
//            cabeza.y = 450;
//            cabeza.dibujar();
           
//            // seria ir a la página de inicio

//            // Ocultar el canvas 
//         }
//     }
//     else if (cabeza.detectarColision(pared2)) {
//         alert ("Has muerto. Suerte la próxima vez");
//         gameOver = true 
//         if(gameOver){
//            clearInterval(limpiarInterval);
//            cabeza.borrar();
//            cabeza.x = 225;
//            cabeza.y = 450;
//            cabeza.dibujar();
//         }
//     }
//     else if (cabeza.detectarColision(pared3)) {
//         alert ("Has muerto. Suerte la próxima vez");
//         gameOver = true 
//         if(gameOver){
//            clearInterval(limpiarInterval);
//            cabeza.borrar();
//            cabeza.x = 225;
//            cabeza.y = 450;
//            cabeza.dibujar();
//         }
//     }
// }

// const cargaInicial = () => {
//     cabeza.dibujar();
//     pared1.dibujar();
//     pared2.dibujar();
//     pared3.dibujar();
//     limpiarInterval = setInterval(jugar, 10);
// };

// const moverCabeza = (e) => {
//     cabeza.borrar();
//     if (e.key === "ArrowLeft") {
//         if (cabeza.x > 0) {
//             cabeza.x -= 5;
//       }
//     }
//     if (e.key === "ArrowRight") {
//         if (cabeza.x < 450) {
//             cabeza.x += 5;
//       }
//     }
//     if (e.key === "ArrowUp") {
//         if (cabeza.y > 0) {
//             cabeza.y -= 5;}
//     }
//     if (e.key === "ArrowDown") {
//         if (cabeza.y < 450) {
//             cabeza.y += 5;
//         }
//     }
//     cabeza.dibujar();
// };

/////window.addEventListener("load", cargaInicial);

//window.addEventListener("keydown", moverCabeza);
//testButton.addEventListener("click", moverCabeza);
//-----------------------------------------------------------------

window.addEventListener("load", createSplashScreen);