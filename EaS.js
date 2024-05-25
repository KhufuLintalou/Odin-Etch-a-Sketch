let container = document.querySelector(".container");
let grid = document.querySelector(".grid");

for (i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.addEventListener("mouseover", function() {
        square.style.backgroundColor = "black";
    }) 
}

let gridSizeButton = document.querySelector(".grid-size");
gridSizeButton.addEventListener("click", function() {
    let userInput = Number(prompt(("Enter a grid size up to 100")));
    if (userInput > 100) {
        alert("Only numbers between 2 and 100!");
        userInput = 16;
    } else if (userInput <= 1) {
        alert("Only numbers between 2 and 100!");
        userInput = 16;
    } else if (isNaN(userInput)) {
        alert("That's not a number!");
        userInput = 16;
    }
    
    let allSquares = document.querySelectorAll(".square");
    allSquares.forEach(element => {
        element.remove();
    });

    let gridSize = userInput * userInput;
    if (userInput <= 100) {
        for (square = 0; square < gridSize; square++) {
          let square = document.createElement("div");
          square.classList.add("square");
          square.style.height = `${400 / userInput}px`;
          square.style.width = `${400 / userInput}px`;
          container.appendChild(square);
          square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "black";
          })
        }
    }
})

let randomRGB = document.querySelector(".random-color");
randomRGB.addEventListener("click", function() {
        let allSquares = document.querySelectorAll(".square");
        allSquares.forEach(element => {
            element.addEventListener("mouseover", function() {
                let randomRed = Math.floor(Math.random() * 256);
                let randomGreen =  Math.floor(Math.random() * 256);
                let randomBlue = Math.floor(Math.random() * 256);
                element.style.backgroundColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
            })
        })
})