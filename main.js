
// CANVAS CONSTANTS
const radioLandscapeShape = document.querySelector('#landscape');
const radioPortraitShape = document.querySelector('#portrait');
const radioSquareShape = document.querySelector('#square');
const radioCircleShape = document.querySelector('#circle');
const canvasBackgroundColor = document.querySelector('#background-color');
const canvasFrame = document.querySelector('#frame');

// CANVAS INPUT-CONTROLS EVENT LISTNERS

radioLandscapeShape.addEventListener('input', () => {
    canvasFrame.style.width = '100px solid rgba(255, 255, 255, 255)'
})

canvasBackgroundColor.addEventListener('input', () => {
    document.body.style.backgroundColor = canvasBackgroundColor.value
})

// SHAPE CONSTANTS

    // General Inputs
    const inputShapeAmount = document.querySelector('#shapes-amount');
    const inputMaxWidth = document.querySelector('#max-width');
    const inputMaxHeight = document.querySelector('#max-height');

    // General Displays
    const amountValue = document.querySelector('#amount-value');
    const maxWidthValue = document.querySelector('#max-width-value');
    const maxHeightValue = document.querySelector('#max-height-value');

    // Color Inputs
    const inputRed = document.querySelector('#red');
    const inputGreen = document.querySelector('#green');
    const inputBlue = document.querySelector('#blue');
    const inputAlpha = document.querySelector('#alpha');
    
    // Color Displays
    const redValue = document.querySelector('#r-value');
    const greenValue = document.querySelector('#g-value');
    const blueValue = document.querySelector('#b-value');
    const alphaValue = document.querySelector('#a-value');

    // Position Inputs
    const inputX = document.querySelector('#x');
    const inputY = document.querySelector('#y');
    const inputZ = document.querySelector('#z');

    // Position Displays
    const xValue = document.querySelector('#x-value');
    const yValue = document.querySelector('#y-value');
    const zValue = document.querySelector('#z-value');



// SHAPE INPUT-CONTROLS EVENT LISTNERS

    // Display current COLOR value on dial range input
    inputRed.addEventListener('input', () => {
        redValue.textContent = inputRed.value;
    });
    inputGreen.addEventListener('input', () => {
        greenValue.textContent = inputGreen.value;
    });
    inputBlue.addEventListener('input', () => {
        blueValue.textContent = inputBlue.value;
    });
    inputAlpha.addEventListener('input', () => {
        alphaValue.textContent = inputAlpha.value;
    });

    // Display current POSITION value on dial range input

    inputX.addEventListener('input', () => {
        xValue.textContent = inputX.value;
    });
    inputY.addEventListener('input', () => {
        yValue.textContent = inputY.value;
    });
    inputZ.addEventListener('input', () => {
        zValue.textContent = inputZ.value;
    });

    // Display current AMOUNT, MAX-WIDTH and MAX-HEIGHT value on dial range input

    inputShapeAmount.addEventListener('input', () => {
        amountValue.textContent = inputShapeAmount.value;
    })
    inputMaxWidth.addEventListener('input', () => {
        maxWidthValue.textContent = inputMaxWidth.value;
    })
    inputMaxHeight.addEventListener('input', () => {
        maxHeightValue.textContent = inputMaxHeight.value;
    })




// APP CONSTANTS
const button = document.getElementById('myButton');

button.onclick = () => {

    generateArt();
}


// Logic for creating the art
function generateArt() {

    // Clear mechanism to clear previous art
    const allDivs = document.querySelectorAll('.random-square');
    allDivs.forEach(div => div.remove());

    // Logic for creating new art
    for (i = 0; i < inputShapeAmount.value; i++) {
        let newDiv = document.createElement('div');

        // // Percentage Roll (not being used currently)
        // const percentA = Math.floor(Math.random() * 100) + 1;
        // const percentB = Math.floor(Math.random() * 100) + 1;
        // const percentC = Math.floor(Math.random() * 100) + 1;

        // RGB Roll
        const R = Math.floor(Math.random() * inputRed.value) + 1;
        const G = Math.floor(Math.random() * inputGreen.value) + 1;
        const B = Math.floor(Math.random() * inputBlue.value) + 1;
        const A = Math.floor(Math.random() * inputAlpha.value) + 1;

        // /!\ Implement two aditional random rolls for rgba sequences, for gradient rolls
        // const rgba2 = {}
        // const rgba3 = {}
        
        // for (let count = 0; count < 3; count ++) {

        // }


        // Rotate Roll
        const rotateX = Math.floor(Math.random() * 360) + 1;
        const rotateY = Math.floor(Math.random() * 360) + 1;
        const rotateZ = Math.floor(Math.random() * 360) + 1;
        const rotateK = Math.floor(Math.random() * 360) + 1;

        // Width Height Roll
        const width = Math.floor(Math.random() * inputMaxWidth.value) + 1; //500 = cool
        const height = Math.floor(Math.random() * inputMaxHeight.value) + 1; //500 = cool

        // Coordinates X Y Z
        const X = Math.floor(Math.random() * inputX.value) + 1;
        const Y = Math.floor(Math.random() * inputY.value) + 1;
        const Z = Math.floor(Math.random() * inputZ.value) + 1;

        // CoinFlip: Gradient vs Single Color
        const coinFlip = Math.floor(Math.random() * 2) + 1 === 2;
        if (coinFlip) {
            newDiv.style.background = `linear-gradient(rgba(${R}, ${G}, ${B}, ${A}), rgba(${B}, ${A}, ${R}, ${G}), rgba(${A}, ${B}, ${G}, ${R}))`;
        } else {
            newDiv.style.background = `rgb(${R}, ${G}, ${B}, ${A})`;  
        }

        const coinFlip2 = Math.floor(Math.random() * 2) + 1 === 2;

        if (coinFlip2) {
            newDiv.style.transform = `rotate3d(${rotateX}, ${rotateY}, ${rotateZ}, ${rotateK}deg)`;
        }

        // Border Radius
        const borderRadius = Math.floor(Math.random() * 100) + 1;

        // Assign Rolls to CSS values

        // Styling
        newDiv.style.width = `${width}px`;   
        newDiv.style.height = `${height}px`;
        newDiv.style.borderRadius = `${borderRadius}px`;

        newDiv.style.position = 'absolute';
        newDiv.style.top = `${Y}%`;
        newDiv.style.left = `${X}%`;
        newDiv.style.zIndex = `${Z}%`;

        // Give the div a class
        newDiv.classList.add('random-square');

        // Append new Div to DOM
        document.body.appendChild(newDiv);

}
}

// START (Triggers on Page Reload)
generateArt();
