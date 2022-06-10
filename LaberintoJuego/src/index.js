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

const jugar = () => {
    if (cabeza.detectarColision(pared1)) {
       alert ("Has muerto. Suerte la próxima vez");
       gameOver = true 
       if(gameOver){
           clearInterval(limpiarInterval);
           cargaInicial();
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
           cargaInicial;
        }
    }
    else if (cabeza.detectarColision(pared3)) {
        alert ("Has muerto. Suerte la próxima vez");
        gameOver = true 
        if(gameOver){
           clearInterval(limpiarInterval);
           cargaInicial;
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
      cabeza.x -= 5;
    }
    if (e.key === "ArrowRight") {
      cabeza.x += 5;
    }
    if (e.key === "ArrowUp") {
      cabeza.y -= 5;
    }
    if (e.key === "ArrowDown") {
      cabeza.y += 5;
    }
    cabeza.dibujar();
};

window.addEventListener("load", cargaInicial);

window.addEventListener("keydown", moverCabeza);

