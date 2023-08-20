const {Circle} = require("./Circle");
const {Square} = require("./Square");
const {Triangle} = require("./Triangle")


function createDocument(shape, shapeColor, text, textColor) {
// const circle = new Circle().render()
// const square = new Square().render()
// const triangle = new Triangle().render()

    return `
    
    ${shape}
    ${text}
    ${textColor}
    ${shapeColor}
 `
}

module.exports = {createDocument};