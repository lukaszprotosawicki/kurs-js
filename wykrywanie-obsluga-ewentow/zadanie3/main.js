const input = document.querySelector("input");
const passwords = ['Jeden', 'Dwa'];
const messages = ['super', 'działa!'];

const showMessage = (e) => {
    passwords.forEach((item, i) => {
        if(item.toLocaleLowerCase() === e.target.value.toLocaleLowerCase()) {
            document.querySelector('div').textContent = messages[i]
        }
    })
}

input.addEventListener('input', showMessage)