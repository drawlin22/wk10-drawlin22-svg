const Shape = require ("./Shape")

describe ("shape", () => {
    describe ("render", () => {
        it("Should return SVG syntax",() => {
            const shape = new Shape() 
            textColor = "green"
            text = "dog"
            const expectedSVG =
            `<svg version="1.1" width="300 height="200"xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
expect(shape.render()).toEqual(expectedSVG)
        } )
    })
})

