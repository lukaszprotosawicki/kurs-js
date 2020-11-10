const btn = document.querySelector("button");
let number = 1;
const addElement = function () {


    const div = document.createElement('div');
    div.textContent = number;

    if (number%5 == 0) {
        div.classList.add("circle")
        console.log("piaty element")
    }

    document.body.appendChild(div);
    number++;  //inkrementacja
                // console.log(div);
}
btn.addEventListener("click", addElement);
