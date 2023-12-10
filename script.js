let container = document.querySelector('.container');
let box;
let currentColor = 'black';



// Creating a dynamic grid using javascript
function createGrid(numRows){
    let boxSize = Math.floor(1200/numRows)
    container.textContent = ''
    for(let i = 1; i<= numRows; i++){
        let row = document.createElement('div')
        row.classList.add('row');
        for(let j = 1 ; j<= numRows ; j++){
            box = document.createElement('div')
            box.classList.add('box');
            row.appendChild(box)
            box.style.width = `${boxSize}px`
            box.style.height = `${boxSize}px`
            box.style.borderBottom = 'none'
        }
        container.appendChild(row)
    }
}
createGrid(4)

const inputBtn = document.querySelector('#gridValue');
let gridValue;
let displayInput = document.querySelector('.displayInput');
function handleInputChange(){
    gridValue = parseInt(inputBtn.value);
    displayInput.textContent = `${gridValue} X ${gridValue}`
    createGrid(gridValue)
    changeColor(currentColor)
    toggleBtn.textContent = 'ShowGridLines'
}


// hide the gridd lines

const toggleBtn = document.querySelector('.toggleBtn')
toggleBtn.addEventListener('click',()=>{
    container.classList.toggle('removeLeftRightBorders')
    let boxes = container.querySelectorAll('.box')
    boxes.forEach(box =>{
        box.classList.toggle('showGridLines');
    })
    if(toggleBtn.textContent === 'Hide Grid Lines'){
        toggleBtn.textContent = 'Show Grid Lines'
    } else{
        toggleBtn.textContent = 'Hide Grid Lines'
    }
})



// testing the mouse down event in javascript 
function changeColor(color){
    container.querySelectorAll('.box').forEach(box => {
        let insideContainer = false
        box.addEventListener('mousedown',(event)=>{
            if(event.buttons === 1){
                insideContainer = true
            }
        })
        container.addEventListener('mousemove',(event)=>{
            if(insideContainer){
                event.target.style.backgroundColor = color
            }
        })
        container.addEventListener('mouseup',()=>{
            insideContainer = false;
        })
        
    })

}
changeColor(currentColor)
//letting users choose their colors
const colorInput = document.querySelector('#color')
colorInput.addEventListener('input',(event)=>{
    currentColor = event.target.value;
    changeColor(currentColor)
})



// Letting the users choose their background colors
const bgColorInput = document.querySelector('#bg-color');
bgColorInput.addEventListener('input',() => {
    container.querySelectorAll('.box').forEach(box=>{
        box.style.backgroundColor = bgColorInput.value
    })
})

// Set the default background color to white when the page loads
window.addEventListener('load', () => {
    bgColorInput.value = '#ffffff';
    colorInput.value = 'black'
});


// Setting up a clear button to easily clear
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click',()=>{
    container.querySelectorAll('.box').forEach(box=>{
        box.style.backgroundColor = bgColorInput.value
    })
})


// Finally an eraser
const eraserBtn = document.querySelector('.eraser');
eraserBtn.addEventListener('click',()=>{
    changeColor(bgColorInput.value)
})


