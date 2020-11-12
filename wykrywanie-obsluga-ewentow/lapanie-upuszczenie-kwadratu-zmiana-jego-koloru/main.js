const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left =  divX + "px";
div.style.top = `${divY}px`;

let drawActive = false;

div.addEventListener('mousedown', () => {
    div.style.backgroundColor = "gray"
    drawActive = true;
})

div.addEventListener('mousemove', (e) => {
    if(drawActive) {
    divX = e.clientX;
    divY = e.clientY;
    div.style.left =  `${divX - 50}px`;
    div.style.top = `${divY -50}px`;
    }   
})

div.addEventListener('mouseup', () => {
    div.style.backgroundColor = "black"
    drawActive = false;
})