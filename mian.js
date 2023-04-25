const pantalla = document.querySelector ("canvas")
const pincel = pantalla.getContext("2d")
const play = document.querySelector ("#play")
const stop = document.querySelector ("#stop")
const facil = document.querySelector (".facil")
const dificil = document.querySelector (".dificil")
const mensaje = document.querySelector("p")

let radio = 10
let xAleatorio
let yAleatorio
let parar = false
let velocidad = 800

function numeroAleatorio(maximo){
    return Math.floor(Math.random()*maximo)
}
function limpiar(){
    pincel.clearRect(0,0,600,400)
}
function dificultad (){
    velocidad = velocidad + 50
}

dificil.onclick = dificultad()

function dibujarCircunferencia(x,y,radio,color){
    pincel.fillStyle = color
    pincel.beginPath()
    pincel.arc(x,y,radio,0,2*Math.PI)
    pincel.fill()
}
function blanco(x,y){
    dibujarCircunferencia(x,y,(radio+20),"red")
    dibujarCircunferencia(x,y,(radio+10),"white")
    dibujarCircunferencia(x,y,(radio),"red")
}
function actualizarPantalla(){
    limpiar()
    xAleatorio = numeroAleatorio(500)
    yAleatorio = numeroAleatorio(300)
    blanco (xAleatorio,yAleatorio)
}
function playFunction(){
    parar = true
       if (parar == true){
        console.log(parar)
        setInterval(actualizarPantalla,velocidad)
    }
}
play.onclick = playFunction
var contador = 0

function tirar (evento){
    var x = evento.pageX - pantalla.offsetLeft
    var y = evento.pageY - pantalla.offsetTop
    if (
        (x < xAleatorio + radio)&&
        (x > xAleatorio - radio)&&
        (y < yAleatorio + radio)&&
        (y > yAleatorio - radio)){
            alert("Le diste al blanco")
            contador = contador + 1      
        }
}
pantalla.onclick = tirar


document.write (velocidad)
