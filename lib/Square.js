const Shape = require("./Shape")

class Square extends Shape {
    render() {
    return `<rect width="100%" height="100%" fill="${this.color}" />`  /* square specific code */
}
}

module.exports = Square /* exports */