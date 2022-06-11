const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "green";

let cabezaImagen = new Image();
cabezaImagen.src = "src/cabeza2.png";

let pared1Imagen = new Image();
pared1Imagen.src = "src/pared1.png";

let pared2Imagen = new Image();
pared2Imagen.src = "src/pared2.png";

let gameOver = false

let limpiarInterval; 

const cabeza = new Objeto(225, 450, 50, 50, cabezaImagen, ctx)

const pared1 = new Objeto (0, 0, 200, 500, pared1Imagen, ctx)

const pared2 = new Objeto (300, 0, 200, 200, pared2Imagen, ctx)

const pared3 = new Objeto (300, 300, 200, 200, pared2Imagen, ctx)

//--------------------------------------------------------------------------------------
// let game;
// let splashScreen;
// let gameScreen;
// //let gameOverScreen; //pendiente de crear


// //DOM
// function buildDom(htmlString) {
//     const tempDiv = document.createElement("div");
//     tempDiv.innerHTML = htmlString;
//     return tempDiv.children[0];
// }


// //splashScreen -- class rabbit cambiarla en css y aqui
// function createSplashScreen() {
//     splashScreen = buildDom(`
//       <main class="main1">
//           <h1>LABERINTO</h1>
//           <p class="rabbit">USA LAS FLECHAS PARA JUGAR</p> 
//           <div><button id="start-button" onClick="playClick(), playMusic()">START</button></div>
//       </main>
//   `);
  
//     document.body.appendChild(splashScreen);
//     const startButton = splashScreen.querySelector("button");
//     startButton.addEventListener("click", startGame);
// }

// function playClick(){
//     audioClick.currenTime = 0;
//     audioClick.play();
//   }

// function playMusic(){
//     audio.currentTime = 0;
//     audio.volume = 0.1;
//     audio.play();
// }

// // let audio = new Audio("audio/alexander_nakarada_superepic.mp3"); //AUDIO GAME
// // let audioGameOver = new Audio("audio/lesion_x_bad_feelings_cut.mp3"); //AUDIO GAMOVER
// // let audioClick = new Audio("audio/diablo_2_skull_gem_sound.mp3") //AUDIO COLISION

// function removeSplashScreen() {
//     splashScreen.remove();
// }

// function startGame() {
//     removeSplashScreen();
//     // if (gameOverScreen) {
//     //   removeGameOverScreen();
//       playMusic();
//     // }
//     createGameScreen();
  
//     game = new Game(gameScreen);
//     game.start();
// }


// function createGameScreen() {
//     gameScreen = buildDom(`
//       <main class="game container">
//           <header id="countdown">
              
//               <div class="time">
//                   <span class="label"><b>TIME</b></span>
//                   <span class="value"></span>
//               </div>
//               <button id="play" onClick="playClick(), playMusic()"><b>MUSIC ON</b></button>
//               <button id="stop" onClick="playClick(), stopMusic()"><b>MUSIC OFF</b></button>
//             </div>
//           </header>
//           <div class="canvas-container">
//               <canvas></canvas>
//           </div>
//       </main>
//   `);
//     document.body.appendChild(gameScreen);
//     return gameScreen;
//   }
//---------------------------------------------------------------------------------


const jugar = () => {
    if (cabeza.detectarColision(pared1)) {
       alert ("Has muerto. Suerte la próxima vez");
       gameOver = true 
       if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 225;
           cabeza.y = 450;
           cabeza.dibujar();
           
           // seria ir a la página de inicio

           // Ocultar el canvas 
        }
    }
    else if (cabeza.detectarColision(pared2)) {
        alert ("Has muerto. Suerte la próxima vez");
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 225;
           cabeza.y = 450;
           cabeza.dibujar();
        }
    }
    else if (cabeza.detectarColision(pared3)) {
        alert ("Has muerto. Suerte la próxima vez");
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cabeza.borrar();
           cabeza.x = 225;
           cabeza.y = 450;
           cabeza.dibujar();
        }
    }
}

const cargaInicial = () => {
    cabeza.dibujar();
    pared1.dibujar();
    pared2.dibujar();
    pared3.dibujar();
    limpiarInterval = setInterval(jugar, 10);
};

const moverCabeza = (e) => {
    cabeza.borrar();
    if (e.key === "ArrowLeft") {
        if (cabeza.x > 0) {
            cabeza.x -= 5;
      }
    }
    if (e.key === "ArrowRight") {
        if (cabeza.x < 450) {
            cabeza.x += 5;
      }
    }
    if (e.key === "ArrowUp") {
        if (cabeza.y > 0) {
            cabeza.y -= 5;}
    }
    if (e.key === "ArrowDown") {
        if (cabeza.y < 450) {
            cabeza.y += 5;
        }
    }
    cabeza.dibujar();
};

window.addEventListener("load", cargaInicial);

window.addEventListener("keydown", moverCabeza);

