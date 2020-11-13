const options = ['opcja1', 'opcja2'];

const showAdvice = () => {
    const index = Math.floor(Math.random() * options.length);
    console.log(index);
}

const addOption = (e) => {
    e.preventDefault();
    const input = document.querySelector('input')
    options.push(input.value)
    alert(`Dodana została opcja ${input.value}`);
    input.value = "";
}

const resetOptions = (e) => {
    e.preventDefault();
    options.length = 0;
}

const showOptions = () => {
    alert(options.join(" --- --- "))
}

document.querySelector('.add').addEventListener('click', addOption)

document.querySelector('.clean').addEventListener('click', resetOptions)

document.querySelector('.showAdvice').addEventListener('click', showAdvice)

document.querySelector('.showOptions').addEventListener('click', showOptions)