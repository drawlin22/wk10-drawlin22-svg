const Square = require("./Square")

describe ("Square", () => {
    describe ("render", () => {
        it("Should return SVG syntax",() => {
            const square = new Square() 
            square.color ="green"
            const expectedSVG =
            `<rect width="100%" height="100%" fill="green" />`/* checking for shape specific code */
expect(square.render()).toEqual(expectedSVG)
        } )
    })
})