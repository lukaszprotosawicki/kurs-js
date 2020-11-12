const input = document.getElementById('pass');
const div = document.querySelector('.message')
const passwords = ["user", "wiosna"];
const messages = ["wyjechałam na zawsze", "piękna pora roku"];

input.addEventListener('input', (e) => {
    // console.log(e.target.value);
    const text = e.target.value;

    passwords.forEach( (password => {
        if(password === text);
        div.textContent = messages;

    } )
    





    // if (password === e.target.value) {
    //     div.textContent = message;
    //     e.target.value = '';
    // }
    // else {
    //     div.textContent = "";
    // }
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})