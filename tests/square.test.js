const Square = require("../lib/square");

describe('Square', ()=>{
    test('should render square with the color', ()=>{
        const color='pink';
        const shape=new Square(color);
        expect(shape.render()).toEqual(`<rect x="50" y="0" width="200" height="200" fill="${color}" />`)

    })
})