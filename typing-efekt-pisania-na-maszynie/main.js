const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor')
const txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit delectus recusandae tenetur, consequuntur aliquam, totam enim asperiores ullam eligendi, repellat libero ad repellendus corrupti optio accusamus saepe. Mollitia repellat est tenetur vero exercitationem assumend'

// Pataremtry
let indexText = 0;
const time = 40;

// Implementacja
const addLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++;
    if(indexText === txt.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {

}

const indexTyping = setInterval(addLetter, time);

setInterval(cursorAnimation, 400);