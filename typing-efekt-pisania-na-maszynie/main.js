const spnText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A impedit delectus recusandae tenetur, consequuntur aliquam, totam enim asperiores ullam eligendi, repellat libero ad repellendus corrupti optio accusamus saepe. Mollitia repellat est tenetur vero exercitationem assumend'

let number = 0;
const addLetter = () => {
    console.log('ok')
    number++;
    if(number == 200) clearInterval(indexTyping);
}
const indexTyping = setInterval(addLetter, 50);