const btn = document.querySelector('button');

const names = ["Beata", "Daria", "Karolina", "Lukasz", "Joanna", "Renata", "Bartek", "Dawid"];

const index = Math.floor(Math.random() * 8);
console.log(names[index]);

const nameGenerator = () => {

}

btn.addEventListener('click', nameGenerator)