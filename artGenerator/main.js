const button = document.getElementById('myButton');

button.onclick = () => {

    generateArt();
}

function generateArt() {
    const allDivs = document.querySelectorAll('.random-square');
    // Loop through and remove each div from the DOM
    allDivs.forEach(div => div.remove());

    for (i = 0; i < 100; i++) {
        let newDiv = document.createElement('div');

        // Percentage Roll (not being used currently)
        const percentA = Math.floor(Math.random() * 100) + 1;
        const percentB = Math.floor(Math.random() * 100) + 1;
        const percentC = Math.floor(Math.random() * 100) + 1;

        // RGB Roll
        const R = Math.floor(Math.random() * 255) + 1;
        const G = Math.floor(Math.random() * 255) + 1;
        const B = Math.floor(Math.random() * 255) + 1;
        const A = Math.floor(Math.random() * 255) + 1;

        // Rotate Roll
        const rotateX = Math.floor(Math.random() * 360) + 1;
        const rotateY = Math.floor(Math.random() * 360) + 1;
        const rotateZ = Math.floor(Math.random() * 360) + 1;
        const rotateK = Math.floor(Math.random() * 360) + 1;

        // Width Height Roll

        // 500x500 Squarish zoomed
        // 10x500 Wheat Fields
        // 500x10 
        const width = Math.floor(Math.random() * 300) + 1; //500 = cool
        const height = Math.floor(Math.random() * 300) + 1; //500 = cool

        // X Y Z
        const X = Math.floor(Math.random() * 80) + 1;
        const Y = Math.floor(Math.random() * 80) + 1;
        const Z = Math.floor(Math.random() * 100) + 1;

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

// const rRange = document.querySelector('r-value').addEventListener('') 


// START
generateArt();
