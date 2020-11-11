const btn = document.querySelector('button');

const LiItems = document.querySelectorAll('li');
let fontSize = 10;

btn.addEventListener('click', function() {
    console.log('dziala');
    fontSize++;
    for(let i = 0; i<LiItems.length; i++) {
    LiItems[i].style.display = 'block';
    LiItems[i].style.fontSize = fontSize + "px";

    }

})

