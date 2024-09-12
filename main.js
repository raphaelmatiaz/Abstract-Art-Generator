
// CANVAS CONSTANTS
const canvas = document.querySelector('#canvas');
const radioLandscapeShape = document.querySelector('#landscape');
const radioPortraitShape = document.querySelector('#portrait');
const radioSquareShape = document.querySelector('#square');
const radioCircleShape = document.querySelector('#circle');
const canvasBackgroundColor = document.querySelector('#background-color');
const canvasFrame = document.querySelector('#frame');

// CANVAS INPUT-CONTROLS EVENT LISTNERS

radioLandscapeShape.addEventListener('input', () => {
    canvas.style.width = '80%';
    canvas.style.height = '80%';
    canvas.style.borderRadius = '0';

})

radioPortraitShape.addEventListener('input', () => {
    canvas.style.width = '30%';
    canvas.style.height = '80%';
    canvas.style.borderRadius = '0';
})

radioSquareShape.addEventListener('input', () => {
    canvas.style.width = '40vw';
    canvas.style.height = '40vw';
    canvas.style.borderRadius = '0';
})

radioCircleShape.addEventListener('input', () => {
    canvas.style.width = '40vw';
    canvas.style.height = '40vw';
    canvas.style.borderRadius = '50%';
})

canvasBackgroundColor.addEventListener('input', () => {
    canvas.style.backgroundColor = canvasBackgroundColor.value
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


    // PRESET CONSTANTS
    const presetNeonStripes = document.querySelector('#neon-stripes');
    const presetTallGrass = document.querySelector('#tall-grass');
    const presetLimbo = document.querySelector('#limbo');
    const presetSketch = document.querySelector('#sketch');
    const presetEmoji = document.querySelector('#emoji');
    const presetAlienDialect = document.querySelector('#alien-dialect');

    // PRESET INPUT-CONTROLS EVENT LISTNERS

    // Neon Stripes Preset
    presetNeonStripes.addEventListener('input', () => {

        canvas.style.width = '40vw';
        canvas.style.height = '40vw';
        canvas.style.borderRadius = '0';

        let presetCanvasBackgroundColor = 'rgb(0, 0, 0)';
        let presetShapeAmount = 350;
        let presetMaxWidth = 4;
        let presetMaxHeight = 800;
        let presetRed = 255;
        let presetGreen = 0;
        let presetBlue = 255;
        let presetAlpha = 0;
        let x = 255;
        let y = 30;
        let z = 50;

        canvasBackgroundColor.value = presetCanvasBackgroundColor;
        canvas.style.background = presetCanvasBackgroundColor;

        inputShapeAmount.value = presetShapeAmount;
        amountValue.textContent = presetShapeAmount;

        inputMaxWidth.value = presetMaxWidth;
        maxHeightValue.textContent = presetMaxWidth;

        inputMaxHeight.value = presetMaxHeight;
        maxHeightValue.textContent = presetMaxHeight;

        inputRed.value = presetRed;
        redValue.textContent = presetRed;

        inputGreen.value = presetGreen;
        greenValue.textContent = presetGreen;

        inputBlue.value = presetBlue;
        blueValue.textContent = presetBlue

        inputAlpha.value = presetAlpha;
        alphaValue.textContent = presetAlpha;

        inputX.value = x;
        xValue.textContent = x;

        inputY.value = y;
        yValue.textContent = y;

        inputZ.value = z;
        zValue.textContent = z;

        generateArt();
    })

    presetEmoji.addEventListener('input', () => {

        canvas.style.width = '40vw';
        canvas.style.height = '40vw';
        canvas.style.borderRadius = '50%';

        let presetCanvasBackgroundColor = 'rgb(251, 223, 121)';
        let presetShapeAmount = 3;
        let presetMaxWidth = 100;
        let presetMaxHeight = 100;
        let presetRed = 0;
        let presetGreen = 0;
        let presetBlue = 0;
        let presetAlpha = 0;
        let x = 100;
        let y = 100;
        let z = 50;

        canvasBackgroundColor.value = presetCanvasBackgroundColor;
        canvas.style.background = presetCanvasBackgroundColor;

        inputShapeAmount.value = presetShapeAmount;
        amountValue.textContent = presetShapeAmount;

        inputMaxWidth.value = presetMaxWidth;
        maxHeightValue.textContent = presetMaxWidth;

        inputMaxHeight.value = presetMaxHeight;
        maxHeightValue.textContent = presetMaxHeight;

        inputRed.value = presetRed;
        redValue.textContent = presetRed;

        inputGreen.value = presetGreen;
        greenValue.textContent = presetGreen;

        inputBlue.value = presetBlue;
        blueValue.textContent = presetBlue

        inputAlpha.value = presetAlpha;
        alphaValue.textContent = presetAlpha;

        inputX.value = x;
        xValue.textContent = x;

        inputY.value = y;
        yValue.textContent = y;

        inputZ.value = z;
        zValue.textContent = z;

        generateArt();

    })

    presetTallGrass.addEventListener('input', () => {

        canvas.style.width = '80%';
        canvas.style.height = '80%';
        canvas.style.borderRadius = '0';

        let presetCanvasBackgroundColor = 'rgb(224, 253, 255)';
        let presetShapeAmount = 575;
        let presetMaxWidth = 10;
        let presetMaxHeight = 1000;
        let presetRed = 0;
        let presetGreen = 255;
        let presetBlue = 0;
        let presetAlpha = 255;
        let x = 100;
        let y = 100;
        let z = 50;

        canvasBackgroundColor.value = presetCanvasBackgroundColor;
        canvas.style.background = presetCanvasBackgroundColor;

        inputShapeAmount.value = presetShapeAmount;
        amountValue.textContent = presetShapeAmount;

        inputMaxWidth.value = presetMaxWidth;
        maxHeightValue.textContent = presetMaxWidth;

        inputMaxHeight.value = presetMaxHeight;
        maxHeightValue.textContent = presetMaxHeight;

        inputRed.value = presetRed;
        redValue.textContent = presetRed;

        inputGreen.value = presetGreen;
        greenValue.textContent = presetGreen;

        inputBlue.value = presetBlue;
        blueValue.textContent = presetBlue

        inputAlpha.value = presetAlpha;
        alphaValue.textContent = presetAlpha;

        inputX.value = x;
        xValue.textContent = x;

        inputY.value = y;
        yValue.textContent = y;

        inputZ.value = z;
        zValue.textContent = z;

        generateArt();

    })

    presetLimbo.addEventListener('input', () => {

        canvas.style.width = '80%';
        canvas.style.height = '80%';
        canvas.style.borderRadius = '0';

        let presetCanvasBackgroundColor = 'rgb(255, 255, 255)';
        let presetShapeAmount = 19;
        let presetMaxWidth = 550;
        let presetMaxHeight = 525;
        let presetRed = 0;
        let presetGreen = 0;
        let presetBlue = 0;
        let presetAlpha = 0;
        let x = 100;
        let y = 50;
        let z = 50;

        canvasBackgroundColor.value = presetCanvasBackgroundColor;
        canvas.style.background = presetCanvasBackgroundColor;

        inputShapeAmount.value = presetShapeAmount;
        amountValue.textContent = presetShapeAmount;

        inputMaxWidth.value = presetMaxWidth;
        maxHeightValue.textContent = presetMaxWidth;

        inputMaxHeight.value = presetMaxHeight;
        maxHeightValue.textContent = presetMaxHeight;

        inputRed.value = presetRed;
        redValue.textContent = presetRed;

        inputGreen.value = presetGreen;
        greenValue.textContent = presetGreen;

        inputBlue.value = presetBlue;
        blueValue.textContent = presetBlue

        inputAlpha.value = presetAlpha;
        alphaValue.textContent = presetAlpha;

        inputX.value = x;
        xValue.textContent = x;

        inputY.value = y;
        yValue.textContent = y;

        inputZ.value = z;
        zValue.textContent = z;

        generateArt();

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
        canvas.appendChild(newDiv);

}
}

// START (Triggers on Page Reload)
generateArt();
