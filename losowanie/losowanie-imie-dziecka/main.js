const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Beata", "Daria", "Karolina", "Lukasz", "Joanna", "Renata", "Bartek", "Dawid"];
const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy", "Myślę", "Uważam", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"]

// console.log(names[index]);

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    const indexPrefixs = Math.floor(Math.random() * prefixs.length);
    div.textContent = `${prefixs[indexPrefixs]}, że najlepsze będzie imię ${names[indexName]}`
}

btn.addEventListener('click', nameGenerator)