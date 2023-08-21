const inquirer = require ('inquirer');
const {writeFile} = require('fs/promises');
const SVG = require ('./Svg')
const Circle = require("./Circle")
const Square = require("./Square")
const Triangle = require("./Triangle")

class Cli {
    constructor () {
}

run() {
return inquirer
.prompt ([ /* When CLI is called by running node index.js inquirer is started */

{
    type:'input',
    name: 'text',
    message: 'What text do you want displayed (up to three letters)?' /* user question */
},

{
    type:'list',
    name: 'shape',
    message: 'What shape do you want?', /* user question */
    choices: ['circle','triangle','square'] /* user choices */
},

{
    type:'input',
    name: 'textColor',
    message: 'What color do you want your text?', /* user question */
},

{
    type:'input',
    name: 'shapeColor',
    message: 'What color do you want your shape?',   /* user question */
},

])

.then((response) => { /* after questions are answered */
    let userShape;
    if (response.shape === "circle")   { /* if user selects shape circle then new instance of circle is created */
        userShape = new Circle ()
    } else if (response.shape ==="square") { /* if user selects shape square then new instance of square is created */
        userShape = new Square()
    } else {
        userShape = new Triangle () /* if user selects shape triangle then new instance of triangle is created */
    }
    
    userShape.setcolor(response.shapeColor)

    let svg = new SVG()

    svg.setText(response.text, response.textColor) /* new svg veriable from line 55 uses setText setter function to add text and text color from user responses */
    svg.setShape(userShape)


    return writeFile(
       './examples/Generated.svg',
        svg.render() /* renders from the svg variable on line 55 to pull together from all classes into one file */
    )
})

.then(() => console.log('Generated.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
}
}


module.exports = Cli; /* exports */

