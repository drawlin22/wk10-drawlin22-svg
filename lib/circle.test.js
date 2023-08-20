const Circle = require("./Circle")

describe ("circle", () => {
    describe ("render", () => {
        it("Should return SVG syntax",() => {
            const circle = new Circle() 
            shapeColor = "green"
            const expectedSVG =
            `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`
expect(circle.render()).toEqual(expectedSVG)
        } )
    })
})