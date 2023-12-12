console.log('script.js Initializing');
// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector('.container').children;

// We use formula a + randomValue * (b - a) this will give random value between interval (a, b)
function getRandomColor() {
    val1 = Math.ceil(Math.random() * 255);
    val2 = Math.ceil(Math.random() * 255);
    val3 = Math.ceil(Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor(); 
    e.style.color = getRandomColor(); 
})