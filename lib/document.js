const {Circle} = require("./Circle");
const {Square} = require("./Square");
const {Triangle} = require("./Triangle")


function createDocument(shape, shapeColor, text, textColor) {
// const circle = new Circle()
// const square = new Square()
// const triangle = new Triangle()

    return `
    
    ${shape}
    ${text}
    ${textColor}
    ${shapeColor}
 `
}

module.exports = {createDocument};