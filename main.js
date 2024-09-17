


// Dark Mode
const root = document.documentElement; //Get the HTML element
const rootVariables = getComputedStyle(root); // Gets the root variables in CSS
const main = document.querySelector('#main');
const toggleDarkMode = document.querySelector('#dark-mode-toggle');

// Dark Mode Event Lister
toggleDarkMode.addEventListener('click', () => {

    // console.log(toggleDarkMode.getAttribute('state'));

    if (toggleDarkMode.getAttribute('state') == 'light-mode') {
        console.log(`this is in ${toggleDarkMode.getAttribute('state')}.`)
        toggleDarkMode.setAttribute('state', 'dark-mode')
        console.log(`Switched to:  ${toggleDarkMode.getAttribute('state')}.`)
        // main.style.backgroundColor = 'black';
        root.style.setProperty('--color-primary', '#303030');
        root.style.setProperty('--color-secondary', '#FFFFFF');
        root.style.setProperty('--color-box-shadow-primary', '#000000');
        root.style.setProperty('--color-canvas-box-shadow', '#000000');
        root.style.setProperty('--color-border-primary', '#000000')
        // document.getElementById('#controls').style.backgroundColor = '#000'

    } 
    else {
        console.log(`this is in ${toggleDarkMode.getAttribute('state')}.`)
        toggleDarkMode.setAttribute('state', 'light-mode')
        console.log(`Switched to:  ${toggleDarkMode.getAttribute('state')}.`)
        // main.style.backgroundColor = 'white';
        root.style.setProperty('--color-primary', '#FFFFFF');
        root.style.setProperty('--color-secondary', '#000000');
        root.style.setProperty('--color-box-shadow-primary', '#cacaca');
        root.style.setProperty('--color-canvas-box-shadow', '#3c3c3c');
        root.style.setProperty('--color-border-primary', '#8f8f8f')
    }
})

// =============== CONSTANTS + EVENT LISTNERS ===================


// --- CANVAS ---

// CANVAS CONSTANTS 
const canvas = document.querySelector('#canvas');
const radioLandscapeShape = document.querySelector('#landscape');
const radioPortraitShape = document.querySelector('#portrait');
const radioSquareShape = document.querySelector('#square');
const radioCircleShape = document.querySelector('#circle');
const canvasBackgroundColor = document.querySelector('#background-color');
const canvasFrame = document.querySelector('#frame');

// CANVAS CONSTANTS EVENT LISTNERS
radioLandscapeShape.addEventListener('input', () => {
    setLandscape();
})

radioPortraitShape.addEventListener('input', () => {
    setPortrait()
})

radioSquareShape.addEventListener('input', () => {
    setSquare();
})

radioCircleShape.addEventListener('input', () => {
    setCircle();
})

canvasBackgroundColor.addEventListener('input', () => {
    canvas.style.backgroundColor = canvasBackgroundColor.value
})


// --- SHAPES ---

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


// SHAPE CONSTANTS EVENT LISTNERS

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



// =============== FUNCTIONS ====================

// SET LANDSCAPE
const setLandscape = () => {
    canvas.style.width = '80%';
    canvas.style.height = '80%';
    canvas.style.borderRadius = '0';
}
// SET PORTRAIT
const setPortrait = () => {
    canvas.style.width = '30%';
    canvas.style.height = '80%';
    canvas.style.borderRadius = '0';
}
// SET SQUARE
const setSquare = () => {
    canvas.style.width = '40vw';
    canvas.style.height = '40vw';
    canvas.style.borderRadius = '0';
}
// SET CIRCLE
const setCircle = () => {
    canvas.style.width = '40vw';
    canvas.style.height = '40vw';
    canvas.style.borderRadius = '50%';
}


// SET PRESET
const setPreset = (
    canvasWidth, canvasHeight, canvasBorderRadius, canvasBackgroundColor, 
    shapeAmount, maxWidth, minWidth, 
    r, g, b, a, 
    argX, argY, argZ) => {
        
    canvas.style.width = canvasWidth;
    canvas.style.height = canvasHeight;
    canvas.style.borderRadius = canvasBorderRadius;

    let presetCanvasBackgroundColor = canvasBackgroundColor;
    let presetShapeAmount = shapeAmount;
    let presetMaxWidth = maxWidth;
    let presetMaxHeight = minWidth;
    let presetRed = r;
    let presetGreen = g;
    let presetBlue = b;
    let presetAlpha = a;
    let x = argX;
    let y = argY;
    let z = argZ;

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
}

// GENERATE ART
const generateArt = () => {

    // Clears previous Art
    const allDivs = document.querySelectorAll('.random-shape');
    allDivs.forEach(div => div.remove());

    // Generates new Art
    for (i = 0; i < inputShapeAmount.value; i++) {
        let newDiv = document.createElement('div');

        // RGB Roll
        const R = Math.floor(Math.random() * inputRed.value) + 1;
        const G = Math.floor(Math.random() * inputGreen.value) + 1;
        const B = Math.floor(Math.random() * inputBlue.value) + 1;
        const A = Math.floor(Math.random() * inputAlpha.value) + 1;

        // Rotate Roll
        const rotateX = Math.floor(Math.random() * 360) + 1;
        const rotateY = Math.floor(Math.random() * 360) + 1;
        const rotateZ = Math.floor(Math.random() * 360) + 1;
        const rotateK = Math.floor(Math.random() * 360) + 1;

        // Width Height Roll
        const width = Math.floor(Math.random() * inputMaxWidth.value) + 1;
        const height = Math.floor(Math.random() * inputMaxHeight.value) + 1;

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

        // Give the div a class (Used for clear mechanism)
        newDiv.classList.add('random-shape');

        // Append new Div to DOM
        canvas.appendChild(newDiv);

}
}

// PRESET CONSTANTS
const presetNeonStripes = document.querySelector('#neon-stripes');
const presetTelescope = document.querySelector('#telescope');
const presetTallGrass = document.querySelector('#tall-grass');
const presetLimbo = document.querySelector('#limbo');
const presetSketch = document.querySelector('#sketch');
const presetEmoji = document.querySelector('#emoji');
const presetAlienDialect = document.querySelector('#alien-dialect');


// PRESET INPUT-CONTROLS EVENT LISTNERS

    // Neon Stripes
    presetNeonStripes.addEventListener('input', () => 
        
        setPreset('40vw', '40vw', '0', 'rgb(0, 0, 0)', 350, 4, 800, 255, 0, 255, 0, 100, 30, 50));

    // Telescope
    presetTelescope.addEventListener('input', () => 
        
        setPreset('40vw', '40vw', '50%', 'rgb(0, 0, 0)', 1000, 2, 2, 255, 255, 255, 255, 100, 100, 50))

    // Emoji
    presetEmoji.addEventListener('input', () => 
    
        setPreset('40vw', '40vw', '50%', 'rgb(251, 223, 121)', 3, 100, 100, 0, 0, 0, 0, 100, 100, 50))

    // Tall Grass
    presetTallGrass.addEventListener('input', () => 
    
        setPreset('80%', '80%', '0', 'rgb(224, 253, 255)', 575, 10, 1000, 0, 255, 0, 255, 100, 100, 50))

    // Limbo
    presetLimbo.addEventListener('input', () => 
    
        setPreset('80%', '80%', '0', 'rgb(153, 153, 153)', 19, 550, 525, 10, 5, 10, 0, 100, 50, 50))

    // Sketch
    presetSketch.addEventListener('input', () => 
    
        setPreset('30%', '80%', '0', 'rgb(255, 255, 255)', 400, 1, 1000, 255, 255, 255, 255, 100, 10, 50))

    // Alien Dialect
    presetAlienDialect.addEventListener('input', () => 
    
        setPreset('80%', '80%', '0', 'rgb(255, 255, 255)', 600, 10, 180, 0, 0, 0, 0, 100, 70, 50))

// APP CONSTANTS
const button = document.getElementById('myButton');

button.onclick = () => {

    generateArt();
}

// START (Triggers on Page Reload)
generateArt();
