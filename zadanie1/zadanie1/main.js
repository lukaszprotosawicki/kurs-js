const squere = document.createElement('div');
document.body.appendChild(squere);

let grow = true;
let size = 100;
squere.style.width = size + "px";
squere.style.height = size + "px";


window.addEventListener("scroll", function(){

    if (grow == true) {

    size += 5;
    squere.style.width = size + "px";
    squere.style.height = size + "px"
    }

    else {
        size -= 5;
        squere.style.width = size + "px";
        squere.style.height = size + "px"
    }

    if(size >= window.innerWidth/2) {
        grow = false;
    } 

    else if(size == 0) {
        grow = true;
    }
})