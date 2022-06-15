// Pantallas
let splashScreen = document.querySelector("#splash-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let winGameScreen = document.querySelector("#wingame-screen");
let howToPlayScreen = document.querySelector("#howtoplay-screen");
let soundSettingScreen = document.querySelector("#soundsetting-screen");
const canvas = document.querySelector("#canvas");

// Botones
let startButton = document.querySelector("#start-btn");
let howToPlayButton = document.querySelector("#how-to-play");
let soundSettingButton = document.querySelector("#sound-setting");
const goToMenu = document.getElementById("back-to-menu");
const goToMenu2 = document.getElementById("back-to-menu2");
const goToHowToPlay = document.getElementById("how-to-play-screen");
const goToMenu3 = document.getElementById("back-to-menu3");
const goToMenu4 = document.getElementById("back-to-menu4");
const soundOn = document.getElementById("sound-on");
const soundOff = document.getElementById("sound-off");

// Sonidos
const musicaJuego = new Audio("audio/musicajuego.mp3");
const musicaGameOver = new Audio("audio/musicagameover.mp3");
const musicaWinGame = new Audio("audio/musicawingame.mp3");
const musicaInicio = new Audio("audio/musicainicio.mp3");

const sonidoJugar = new Audio("audio/sonidojugar.mp3");
const sonidoBotones = new Audio("audio/sonidobotones.mp3");
const sonidoGameOver = new Audio("audio/sonidogameover.mp3");
const sonidoWinGame = new Audio("audio/sonidowingame.mp3");
const sonidoSonidoOff = new Audio("audio/sonidosonidooff.mp3");

function playMusicaJuego() {
  musicaJuego.currentTime = 0;
  musicaJuego.volume = 1;
  musicaJuego.loop = true;
  musicaJuego.play();
}
function stopMusicaJuego() {
  musicaJuego.pause();
}
function playMusicaInicio() {
  musicaInicio.currentTime = 120;
  musicaInicio.volume = 0.2;
  musicaInicio.loop = true;
  musicaInicio.play();
}
function stopMusicaInicio() {
  musicaInicio.pause();
}
function playMusicaGameOver() {
  musicaGameOver.currentTime = 10;
  musicaGameOver.volume = 0.5;
  musicaGameOver.play();
}
function stopMusicaGameOver() {
  musicaGameOver.pause();
}
function playMusicaWinGame() {
  musicaWinGame.currentTime = 0;
  musicaWinGame.volume = 0.3;
  musicaWinGame.play();
}
function stopMusicaWinGame() {
  musicaWinGame.pause();
}

function playSonidoJugar() {
  if ((sonidoOnOff = true)) {
    sonidoJugar.currentTime = 0;
    sonidoJugar.volume = 0.1;
    sonidoJugar.play();
  }
}
function playSonidoBotones() {
  if ((sonidoOnOff = true)) {
    sonidoBotones.currentTime = 0;
    sonidoBotones.volume = 0.1;
    sonidoBotones.play();
  }
}
function playSonidoSonidoOff() {
  if ((sonidoOnOff = true)) {
    sonidoSonidoOff.currentTime = 0;
    sonidoSonidoOff.volume = 0.1;
    sonidoSonidoOff.play();
  }
}
function playSonidoGameOver() {
  if ((sonidoOnOff = true)) {
    sonidoGameOver.currentTime = 0;
    sonidoGameOver.volume = 0.1;
    sonidoGameOver.play();
  }
}
function playSonidoWinGame() {
  if ((sonidoOnOff = true)) {
    sonidoWinGame.currentTime = 0;
    sonidoWinGame.volume = 0.1;
    sonidoWinGame.play();
  }
}

let sonidoOnOff = true;
function stopAllSounds() {
  sonidoOnOff = false;
}
function playAllSounds() {
  sonidoOnOff = true;
}

//FIN MUSICA Y SONIDO

// ctx
const ctx = canvas.getContext("2d");

// Juego activo= sí o no (variable para startGame)
let checkIfGameIsRunning = false;

// Pantalla Jugar-->mostrar canvas
const startGame = () => {
  checkIfGameIsRunning = true;
  if (checkIfGameIsRunning) {
    splashScreen.style.display = "none";
    canvas.style.display = "flex";
  }
};
// Pantalla Cómo jugar
const startHowToPlay = () => {
  splashScreen.style.display = "none";
  howToPlayScreen.style.display = "flex";
};

// Pantalla Sonido
const startSoundSetting = () => {
  splashScreen.style.display = "none";
  soundSettingScreen.style.display = "flex";
};

// Imagen cabeza
let cabezaImagen = new Image();
cabezaImagen.src = "img/cabeza.png";

// Imágenes muros exteriores
let pared1140x30Imagen = new Image();
pared1140x30Imagen.src = "img/paredesexternas/pared1140x30.png";

let pared30x640Imagen = new Image();
pared30x640Imagen.src = "img/paredesexternas/pared30x640.png";

let pared30x110Imagen = new Image();
pared30x110Imagen.src = "img/paredesexternas/pared30x110.png";

let pared30x440Imagen = new Image();
pared30x440Imagen.src = "img/paredesexternas/pared30x440.png";

let pared360x30Imagen = new Image();
pared360x30Imagen.src = "img/paredesexternas/pared360x30.png";

let pared690x30Imagen = new Image();
pared690x30Imagen.src = "img/paredesexternas/pared690x30.png";

// Imágenes muros anchos
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

// Imágenes muros altos

let pared20x90Imagen = new Image();
pared20x90Imagen.src = "img/paredesaltas/pared20x90.png";

let pared20x110Imagen = new Image();
pared20x110Imagen.src = "img/paredesaltas/pared20x110.png";

let pared20x130Imagen = new Image();
pared20x130Imagen.src = "img/paredesaltas/pared20x130.png";

let pared20x200Imagen = new Image();
pared20x200Imagen.src = "img/paredesaltas/pared20x200.png";

// Imagen pinchos

let pinchosImagen = new Image();
pinchosImagen.src = "img/pinchos.png";

// Variable para parar intervalo ()

let limpiarInterval;

// Dibujando imágenes en el canvas
// Cabeza
const cabeza = new Objeto(380, 650, 40, 40, cabezaImagen, ctx);
// Muros exteriores
const pared1 = new Objeto(0, 0, 1140, 30, pared1140x30Imagen, ctx);
const pared2 = new Objeto(0, 30, 30, 640, pared30x640Imagen, ctx);
const pared3 = new Objeto(1110, 30, 30, 110, pared30x110Imagen, ctx);
const pared4 = new Objeto(1110, 230, 30, 440, pared30x440Imagen, ctx);
const pared5 = new Objeto(0, 670, 360, 30, pared360x30Imagen, ctx);
const pared6 = new Objeto(450, 670, 690, 30, pared690x30Imagen, ctx);
// Muros anchos
const pared7 = new Objeto(120, 120, 900, 20, pared900x20Imagen, ctx);
const pared8 = new Objeto(30, 230, 110, 20, pared110x20Imagen, ctx);
const pared9 = new Objeto(340, 230, 350, 20, pared350x20Imagen, ctx);
const pared10 = new Objeto(890, 230, 220, 20, pared220x20Imagen, ctx);
const pared11 = new Objeto(120, 340, 130, 20, pared130x20Imagen, ctx);
const pared12 = new Objeto(340, 340, 130, 20, pared130x20Imagen, ctx);
const pared13 = new Objeto(670, 340, 240, 20, pared240x20Imagen, ctx);
const pared14 = new Objeto(120, 450, 900, 20, pared900x20Imagen, ctx);
const pared15 = new Objeto(230, 560, 350, 20, pared350x20Imagen, ctx);
const pared16 = new Objeto(780, 560, 240, 20, pared240x20Imagen, ctx);
// Muros altos
const pared17 = new Objeto(120, 470, 20, 200, pared20x200Imagen, ctx);
const pared18 = new Objeto(230, 140, 20, 200, pared20x200Imagen, ctx);
const pared19 = new Objeto(340, 250, 20, 90, pared20x90Imagen, ctx);
const pared20 = new Objeto(450, 580, 20, 90, pared20x90Imagen, ctx);
const pared21 = new Objeto(560, 250, 20, 200, pared20x200Imagen, ctx);
const pared22 = new Objeto(670, 470, 20, 130, pared20x130Imagen, ctx);
const pared23 = new Objeto(780, 580, 20, 90, pared20x90Imagen, ctx);
const pared24 = new Objeto(780, 140, 20, 200, pared20x200Imagen, ctx);
const pared25 = new Objeto(890, 250, 20, 90, pared20x90Imagen, ctx);
const pared26 = new Objeto(1000, 340, 20, 110, pared20x110Imagen, ctx);
// Pinchos
const pinchos1 = new Objeto(150, 590, 100, 70, pinchosImagen, ctx);
const pinchos2 = new Objeto(700, 480, 100, 70, pinchosImagen, ctx);
const pinchos3 = new Objeto(590, 370, 100, 70, pinchosImagen, ctx);
const pinchos4 = new Objeto(470, 150, 100, 70, pinchosImagen, ctx);
const pinchos5 = new Objeto(40, 370, 100, 70, pinchosImagen, ctx);
const pinchos6 = new Objeto(1000, 40, 100, 70, pinchosImagen, ctx);

let estanPinchosActivos = false;
let estanPinchosActivos2 = false;

// Cargando imágenes e iniciando intervalo
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
  intervaloPinchos();
  intervaloPinchos2();
  limpiarInterval = setInterval(colisiones, 10);
};

// Parpadeo pinchos
alternar = () => {
  if (estanPinchosActivos === true) {
    pinchos1.borrar();
    pinchos3.borrar();
    pinchos4.borrar();
    estanPinchosActivos = false;
  } else if (estanPinchosActivos === false) {
    pinchos1.dibujar();
    pinchos3.dibujar();
    pinchos4.dibujar();
    estanPinchosActivos = true;
  }
};
alternar2 = () => {
  if (estanPinchosActivos2 === true) {
    pinchos2.borrar();
    pinchos5.borrar();
    pinchos6.borrar();
    estanPinchosActivos2 = false;
  } else if (estanPinchosActivos2 === false) {
    pinchos2.dibujar();
    pinchos5.dibujar();
    pinchos6.dibujar();
    estanPinchosActivos2 = true;
  }
};
function intervaloPinchos() {
  setInterval(alternar, 3400);
}
function intervaloPinchos2() {
  setInterval(alternar2, 4500);
}

// Intento de loop sobre las colisiones con las paredes
// let paredes = [
//     pared1,
//     pared2,
//     pared3,
//     pared4,
//     pared5,
//     pared6,
//     pared7,
//     pared8,
//     pared9,
//     pared10,
//     pared11,
//     pared12,
//     pared13,
//     pared14,
//     pared15,
//     pared16,
//     pared17,
//     pared18,
//     pared19,
//     pared20,
//     pared21,
//     pared22,
//     pared23,
//     pared24,
//     pared25,
//     pared26,
//   ];

//   for (i = 0; i < paredes.length; i++) {
//     if (cabeza.detectarColision(i)) {
//       canvas.style.display = "none";
//       gameOverScreen.style.display = "flex";
//     }
//   }

// Detectando colisiones-->gameOver, incluye win
const colisiones = () => {
  if (cabeza.detectarColision(pared1)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared2)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared3)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared4)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared5)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared6)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared7)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared8)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared9)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared10)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared11)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared12)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared13)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared14)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared15)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared16)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared17)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    stopMusica1();
  } else if (cabeza.detectarColision(pared18)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared19)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared20)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared21)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared22)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared23)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared24)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared25)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.detectarColision(pared26)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (estanPinchosActivos && cabeza.detectarColision(pinchos1)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (estanPinchosActivos && cabeza.detectarColision(pinchos2)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (estanPinchosActivos && cabeza.detectarColision(pinchos3)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (estanPinchosActivos && cabeza.detectarColision(pinchos4)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (estanPinchosActivos && cabeza.detectarColision(pinchos5)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (estanPinchosActivos && cabeza.detectarColision(pinchos6)) {
    canvas.style.display = "none";
    gameOverScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playSonidoGameOver();
    playMusicaGameOver();
  } else if (cabeza.x == 1100 && cabeza.y > 140 && cabeza.y < 230) {
    //tester wingame (cabeza.y == 640)
    canvas.style.display = "none";
    winGameScreen.style.display = "flex";
    clearInterval(limpiarInterval);
    stopMusicaJuego();
    playMusicaWinGame();
    playSonidoWinGame();
  }
};

// Movimiento cabeza
const moverCabeza = (e) => {
  cabeza.borrar();
  if (e.key === "ArrowLeft") {
    if (cabeza.x > 0) {
      cabeza.x -= 10;
    }
  }
  if (e.key === "ArrowRight") {
    if (cabeza.x < 1100) {
      cabeza.x += 10;
    }
  }
  if (e.key === "ArrowUp") {
    if (cabeza.y > 0) {
      cabeza.y -= 10;
    }
  }
  if (e.key === "ArrowDown") {
    if (cabeza.y < 660) {
      cabeza.y += 10;
    }
  }
  e.preventDefault(); //previene que se mueva la pantalla con las teclas de las flechas
  cabeza.dibujar();
};

// Listeners
startButton.addEventListener("click", startGame);
howToPlayButton.addEventListener("click", startHowToPlay);
soundSettingButton.addEventListener("click", startSoundSetting);
// soundOff.addEventListener("click", stopAllSounds);
// soundOn.addEventListener("click", playAllSounds);

goToMenu.addEventListener("click", () => {
  window.location.reload();
});
goToMenu2.addEventListener("click", () => {
  window.location.reload();
});
goToMenu3.addEventListener("click", () => {
  window.location.reload();
});
goToMenu4.addEventListener("click", () => {
  window.location.reload();
});

window.addEventListener("load", cargaInicial);
window.addEventListener("keydown", moverCabeza);
