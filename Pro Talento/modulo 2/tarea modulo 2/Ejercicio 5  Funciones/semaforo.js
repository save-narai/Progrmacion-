/* Deberas realizar un semáforo utilizando JS.
El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
Se debe respetar el orden de los colores:
De rojo pasa a Verde.
De amarillo puede pasar a Rojo.
De Verde pasa a Amarillo.  */



const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const turnOn = {
    'red':      () => img.src = 'vermelho.png',
    'yellow':   () => img.src = 'amarelo.png',
    'green':    () => img.src = 'verde.png',
    'automatic': () => intervalId = setInterval( changeColor, 1000 )
}

buttons.addEventListener('click', trafficLight );
