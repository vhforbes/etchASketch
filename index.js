

let container = document.getElementById('container')
let newDiv
let allDivs = document.querySelectorAll('.squareDiv')

// Square Grid Function

function makeSquares (columns) {

    parseInt(columns)

    for (let i = 1; i <= Math.pow(columns, 2); i++) {
        
        newDiv = document.createElement('div');
        newDiv.className = 'squareDiv';
        container.appendChild(newDiv);
        
    } 

    container.style.cssText = `grid-template-columns: repeat(${columns}, 1fr);`

}

allDivs = document.querySelectorAll('.squareDiv')


// Transform the squares color to Black on hover

let userColorBlack = function hoverBlack() {
    allDivs = document.querySelectorAll('.squareDiv');

for(let i = 0; i < allDivs.length; i++) {
    allDivs[i].addEventListener('mouseover', () => {
        allDivs[i].style.backgroundColor = "black"
    }
    )}
}

// Random RGB the hover squares 

let userColorRGB = function hoverRGB() {
    allDivs = document.querySelectorAll('.squareDiv')
    

    for (let i = 0; i < allDivs.length; i++) {
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
        allDivs[i].addEventListener('mouseover', () => {
            allDivs[i].style.backgroundColor = randomColor
            allDivs[i].style.opacity = 1
        })
    }

}

//Start With Default Template

makeSquares(16);
userColorBlack();
rainbowTimer();

// Clear the board

function clear() {
    
    for (let i = 0; i < allDivs.length; i++) {
        container.removeChild(allDivs[i])
    }
}

// Set transparent 

function transparent() {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.backgroundColor = 'transparent'
    }
}

// Change the board size

function askSize() {

    let size = prompt('Number of squares');
    parseFloat(size);

    while (size <= 0) {
        alert('It must be a positive value');
        size = prompt('Number of squares');
    }

    while (isNaN(parseFloat(size))) {
        alert('It must be a number');
        size = prompt('Number of squares');
    }

   
    return parseInt(size)

}

let userColor

// Set Black Color

let blackButon = document.querySelector('#blackBtn');

blackButon.addEventListener('click', () => {
    userColorBlack();
    userColor = 1;
})

// Set Rainbow Color

let rainbowkBtn = document.querySelector('#rainbowBtn');

rainbowkBtn.addEventListener('click', () => {
    userColorRGB();
    userColor = 2;
})

// Clear Button

let clearBtn = document.querySelector('#clearBtn')

clearBtn.addEventListener('click', () => transparent())

// Resolution Button

let resolutionBtn = document.querySelector('#resolutionBtn')

resolutionBtn.addEventListener('click', () => {
    clear();
    makeSquares(askSize())
    if (userColor == 1) {
        userColorBlack()
    }
    if (userColor == 2) {
        userColorRGB()
    }
    
})

// Random color on rainbow button

function rainbowTimer() {
    setInterval(() => {
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
        rainbowkBtn.style.backgroundColor = randomColor
    }, 200)
}

