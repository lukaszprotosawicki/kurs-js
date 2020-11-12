const input = document.getElementById('pass');
const div = document.querySelector('.message')
const password = "user";
const message = "wyjechałam na zawsze";

input.addEventListener('keyup', (e) => {
    // console.log(e.target.value);
    if (password === e.target.value) {
        div.textContent = message;
        e.target.value = '';
    }
    else {
        div.textContent = "";
    }
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})