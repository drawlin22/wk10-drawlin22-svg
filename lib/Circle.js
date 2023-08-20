const Shape = require("./Shape")

class Circle extends Shape {
    constructor () {
        Shape.call()
    }
    render() {
    return `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`
}
}


module.exports = Circle