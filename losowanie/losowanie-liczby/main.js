Math.random() * (6-4) + 4;

const numberRandom = (min, max) => {
    const number = Math.random() * (max - min) + min
    return number;
}