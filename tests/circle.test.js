const Circle = require("../lib/circle");

describe('Circle', ()=>{
    test('should render circle with the color', ()=>{
        const color='pink';
        const shape=new Circle(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`)

    })
})