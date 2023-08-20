const Square = require("./Square")

describe ("Square", () => {
    describe ("render", () => {
        it("Should return SVG syntax",() => {
            const square = new Square() 
            shapeColor = "green"
            const expectedSVG =
            `<rect width="100%" height="100%" fill="${shapeColor}" />`
expect(square.render()).toEqual(expectedSVG)
        } )
    })
})