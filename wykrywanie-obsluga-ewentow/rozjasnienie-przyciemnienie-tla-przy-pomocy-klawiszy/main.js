let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
    // console.log(e.keyCode, e.which);

    if (e.keyCode === 38) {
        console.log("strzalka do gory");
    }
    else if (e.keyCode === 40) {
    console.log("strzalka w dol");
    }
}

window.addEventListener('keydown', changeColor)