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
        userInput = 16;
    } else if (userInput <= 0) {
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
    for (i = 0; i < gridSize; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "black";
        })
    }
})

