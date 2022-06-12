const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "green";

let cabezaImagen = new Image();
cabezaImagen.src = "src/cabeza2.png";

let pared450x30Imagen = new Image();
pared450x30Imagen.src = "src/pared450x30.png";

let pared1140x30Imagen = new Image();
pared1140x30Imagen.src = "src/pared1140x30.png";

let pared30x640Imagen = new Image();
pared30x640Imagen.src = "src/pared30x640.png";

let pared360x30Imagen = new Image();
pared360x30Imagen.src = "src/pared360x30.png";

let pared690x30Imagen = new Image();
pared690x30Imagen.src = "src/pared690x30.png";

let gameOver = false

let limpiarInterval; 

const cabeza = new Objeto(380, 650, 40, 40, cabezaImagen, ctx);

const pared1 = new Objeto (0, 0, 1140, 30, pared1140x30Imagen, ctx);

const pared2 = new Objeto (0, 30, 30, 640, pared30x640Imagen, ctx);

const pared3 = new Objeto (1110, 30, 30, 640, pared30x640Imagen, ctx);

const pared4 = new Objeto (0, 670, 360, 30, pared360x30Imagen, ctx);

const pared5 = new Objeto (450, 670, 690, 30, pared690x30Imagen, ctx);




const jugar = () => {
    if (cabeza.detectarColision(pared1)) {
       alert ("Has muerto. Suerte la próxima vez");
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
        alert ("Has muerto. Suerte la próxima vez");
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
        alert ("Has muerto. Suerte la próxima vez");
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
        alert ("Has muerto. Suerte la próxima vez");
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
        alert ("Has muerto. Suerte la próxima vez");
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

const cargaInicial = () => {
    cabeza.dibujar();
    pared1.dibujar();
    pared2.dibujar();
    pared3.dibujar();
    pared4.dibujar();
    pared5.dibujar();
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
        if (cabeza.x < 950) {
            cabeza.x += 5;
      }
    }
    if (e.key === "ArrowUp") {
        if (cabeza.y > 0) {
            cabeza.y -= 5;}
    }
    if (e.key === "ArrowDown") {
        if (cabeza.y < 650) {
            cabeza.y += 5;
        }
    }
    cabeza.dibujar();
};

window.addEventListener("load", cargaInicial);

window.addEventListener("keydown", moverCabeza);

