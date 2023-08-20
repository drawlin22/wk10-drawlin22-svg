const Triangle = require("./Triangle")

describe ("Triangle", () => {
    describe ("render", () => {
        it("Should return SVG syntax",() => {
            const triangle = new Triangle() 
            shapeColor = "green"
            const expectedSVG =
            `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`
expect(triangle.render()).toEqual(expectedSVG)
        } )
    })
})