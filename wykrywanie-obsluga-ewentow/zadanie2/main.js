

document.body.addEventListener('click', (event) => {
    console.log(event.clientX, event.clientY);
    const color = getColor(event);
    document.body.style.backgroundColor = color;
})

const getColor = (e) => {
    if(e.clientX % 2 === 0) {
        if(e.clientY % 2 === 0) {
            return "red";
        }
        else {
            return "green";
        }
    }
    else {
        if(e.clientY % 2 === 0){
            return "green";
        }
            else {
                return "cadetblue";
            }
        }
        
    
}