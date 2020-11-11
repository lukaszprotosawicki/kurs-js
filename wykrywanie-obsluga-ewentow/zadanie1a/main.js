

const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function(e) {

    h1.textContent = e.clientX + ", " + e.clientY;
    // console.log(e.clientX, e.clientY);

    document.body.style.backgroundColor = `rgb(${e.clientX /3 }, ${e.clientY /2 }, ${e.clientX / e.clientY * 20})`;
})