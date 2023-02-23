let number = document.getElementById("num");
let button = document.getElementById("button");
let colors = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#ee82ee", "#ffffff", "#000000"];

// function changeNumber() { 
//     let randomNum = Math.floor(Math.random() * 100);
//     number.innerHTML = randomNum;
// }

function changeColor() { 
    let randomColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColor];
    number.style.color = colors[randomColor];
}
