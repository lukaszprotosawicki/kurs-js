const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Beata", "Daria", "Karolina", "Lukasz", "Joanna", "Renata", "Bartek", "Dawid"];


// console.log(names[index]);

const nameGenerator = () => {
    const index = Math.floor(Math.random() * 8);
    div.textContent = `Najfajniejsze imie to ${names[index]}`
}

btn.addEventListener('click', nameGenerator)