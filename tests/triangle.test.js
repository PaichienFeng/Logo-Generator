const Triangle = require("../lib/triangle")

describe('Triangle', ()=>{
    test('should render triangle with the color', ()=>{
        const color='pink';
        const shape=new Triangle(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`)

    })
})