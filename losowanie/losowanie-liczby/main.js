Math.random() * (6 - 4) + 4;

const numberRandom = (min, max) => {
    const number = Math.random() * (max - min) + min
    return number;
}


Math.floor(Math.random() * (6 - 4 + 1) + 4);

const numberRandomInt = (min, max) => {
const number = Math.floor(Math.random() * (max - min + 1) + min);
return number;
}