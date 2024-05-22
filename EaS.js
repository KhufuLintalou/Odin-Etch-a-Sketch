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
    if (gridSize <= 10000) {
        for (i = 0; i < gridSize; i++) {
          let i = document.createElement("div");
          i.classList.add("square");
          i.style.height = `${400 / userInput}px`;
          i.style.width = `${400 / userInput}px`;
          container.appendChild(i);
          i.addEventListener("mouseover", function() {
            i.style.backgroundColor = "black";
          })
        }
    }
})

