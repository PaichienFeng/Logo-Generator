const Triangle = require('./triangle.js');
const Circle = require('./circle.js');
const Square = require('./square.js');

function createDocument(shape, shapeColor, text, textColor){
    let shapeSVG = '';

    switch(shape){
        case 'triangle':
            shapeSVG=new Triangle(shapeColor).render();
            break;
        case 'circle':
            shapeSVG=new Circle(shapeColor).render();
            break;
        case 'square':
            shapeSVG=new Square(shapeColor).render();
            break;
        default:
            console.log('Invalid shape. Please choose triangle, circle or square.');
            return;
            
    }

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeSVG}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  
  </svg>`
}

module.exports={createDocument};

