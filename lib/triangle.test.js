const Triangle = require("./Triangle")

describe ("Triangle", () => {
    describe ("render", () => {
        it("Should return SVG syntax",() => {
            const triangle = new Triangle() 
            triangle.color ="green"
            const expectedSVG =
            `<polygon points="150, 18 244, 182 56, 182" fill="green" />`/* checking for shape specific code */
expect(triangle.render()).toEqual(expectedSVG)
        } )
    })
})