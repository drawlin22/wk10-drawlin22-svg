const Circle = require("./Circle")

describe ("circle", () => {
    describe ("render", () => {
        it("Should return SVG syntax",() => {
            const circle = new Circle() 
            circle.color ="green"
            const expectedSVG =
            `<circle cx="150" cy="100" r="80" fill="green" />` /* checking for shape specific code */
expect(circle.render()).toEqual(expectedSVG)
        } )
    })
})