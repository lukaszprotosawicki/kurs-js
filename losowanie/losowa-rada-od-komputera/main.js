const options = ['opcja1', 'opcja2'];

const addOption = (e) => {
    e.preventDefault();
    const input = document.querySelector('input')
    options.push(input.value)
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

document.querySelector('.showOptions').addEventListener('click', showOptions)