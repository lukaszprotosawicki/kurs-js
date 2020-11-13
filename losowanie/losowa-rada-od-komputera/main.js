const options = ['opcja1', 'opcja2'];

const resetOptions = () => {
    options.length = 0;
}

const showOptions = () => {
    alert(options.join(" --- --- "))
}

document.querySelector('.clean').addEventListener('click', resetOptions)
document.querySelector('.showOptions').addEventListener('click', showOptions)