const btnChangeColor = document.getElementById("buttonChangeColor");


const SliderFunc = document.getElementById("redSlider");
    let randomColor = "";

const redBox = document.querySelector(".red.box");
const bground = document.querySelector("body")

SliderFunc.oninput = function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    randomColor = `rgb(${r}, ${g}, ${b})`
    bground.style.backgroundColor = randomColor;

};


btnChangeColor.onclick = function() {
    document.body.style.backgroundColor = randomColor;
}
