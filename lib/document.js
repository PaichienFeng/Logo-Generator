const Triangle = require('./triangle.js');
const Circle = require('./circle.js');
const Square = require('./square.js');

function createDocument(shape){
    let shapeSVG = '';

    switch(shape){
        case 'triangle':
            shapeSVG=new Triangle().render();
            break;
        case 'circle':
            shapeSVG=new Circle().render();
            break;
        case 'square':
            shapeSVG=new Square().render();
            break;
        default:
            console.log('Invalid shape. Please choose triangle, circle or square.');
            return;
            
    }

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeSVG}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  
  </svg>`
}

module.exports={createDocument};

<circle cx="150" cy="100" r="80" fill="green" />