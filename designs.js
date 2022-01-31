// Select color input
// Select size input
const isSize = document.querySelector('.isSize');
const isCanvas = document.querySelector('.isCanvas');
const isColor = document.querySelector('.isColor');
const isClear = document.querySelector('.isClear');
const newArt = document.querySelector('.newArt');

function makeGrid() {
  let gridHeight = document.querySelector('.height').value;
  let gridWidth = document.querySelector('.width').value;

  while (isCanvas.firstChild) {
    isCanvas.removeChild(isCanvas.firstChild);
    }
// Rows, cells and Columns 
  for (let i = 1; i <= gridHeight; i++) {
    let gridRow = document.createElement('tr');
    isCanvas.appendChild(gridRow);
    for (let j = 1; j <= gridWidth; j++) {
      let gridCell = document.createElement('td');
      gridRow.appendChild(gridCell);
      // color the cell
      gridCell.addEventListener('mousedown', function() {
        const color = document.querySelector('.colorPallete').value;
        this.style.backgroundColor = color;
      })
     }
  }
}
//grid size
makeGrid(25, 25);
isSize.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid();
});

let clicked = false;
// switch between true and false
isCanvas.addEventListener('mousedown', function(e) {
	clicked = true;
	isCanvas.addEventListener('mouseup', function() {
		clicked = false;
	});

  isCanvas.addEventListener('mouseleave', function() {
    clicked = false;
  });

  isCanvas.addEventListener('mouseover', function(e) {
    
    const color = document.querySelector('.colorPallete').value;

  	if (clicked) {
      if (e.target.tagName === 'TD') {
      	e.target.style.backgroundColor = color;
      }
    }
  });
});
//adding color function
isColor.addEventListener('click', function(e) {
  e.preventDefault();
  const color = document.querySelector('.colorPallete').value;
  isCanvas.querySelectorAll('td').forEach(td => td.style.backgroundColor = color);
});

isCanvas.addEventListener('dblclick', e => {
  e.target.style.backgroundColor = null;
});
// erasing cells colours
editMode.addEventListener('click', function() {
  isCanvas.addEventListener('mousedown', function(e) {
  	clicked = true;
  	isCanvas.addEventListener('mouseup', function() {
  		clicked = false;
  	});
    isCanvas.addEventListener('mouseleave', function() {
      clicked = false;
    });
    isCanvas.addEventListener('mouseover', function(e) {
    	if (clicked) {
        if (e.target.tagName === 'TD') {
        	e.target.style.backgroundColor = null;
        }
      }
    });
  });
  isCanvas.addEventListener('mousedown', function(e) {
    e.target.style.backgroundColor = null;
  });
});
// drawing a pixel
Redraw.addEventListener('click', function() {
  isCanvas.addEventListener('mousedown', function(e) {
  	clicked = true;
  	isCanvas.addEventListener('mouseup', function() {
  		clicked = false;
  	});

    isCanvas.addEventListener('mouseleave', function() {
      clicked = false;
    });
    isCanvas.addEventListener('mouseover', function(e) {
      const color = document.querySelector('.colorPallete').value;
    	if (clicked) {
        if (e.target.tagName === 'TD') {
        	e.target.style.backgroundColor = color;
        }
      }
    });
  });
  isCanvas.addEventListener('mousedown', function(e) {
    if (e.target.tagName !== 'TD') return;
    const color = document.querySelector('.colorPallete').value;
    e.target.style.backgroundColor = color;
  });
});