const inquirer = require ('inquirer');
const {writeFile} = require('fs/promises');
// const {createDocument} = require('./document');
const SVG = require ('./Svg')
const Circle = require("./Circle")
const Square = require("./Square")
const Triangle = require("./Triangle")

class Cli {
    constructor () {
}

run() {
return inquirer
.prompt ([

{
    type:'input',
    name: 'text',
    message: 'What text do you want displayed (up to three letters)?'
},

{
    type:'list',
    name: 'shape',
    message: 'What shape do you want?',
    choices: ['circle','triangle','square']
},

{
    type:'input',
    name: 'textColor',
    message: 'What color do you want your text?',
},

{
    type:'input',
    name: 'shapeColor',
    message: 'What color do you want your shape?',   
},

])

.then((response) => {
    console.log(response)
    let userShape;
    if (response.shape === "circle")   {
        userShape = new Circle ()
    } else if (response.shape ==="square") {
        userShape = new Square()
    } else {
        userShape = new Triangle ()
    }
    
    userShape.setcolor(response.shapeColor)

    let svg = new SVG()

    svg.setText(response.text, response.textColor)
    svg.setShape(userShape)


    return writeFile(
       'Generated.svg',
        svg.render()
    )
})

.then(() => console.log('Generated.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
}
}


module.exports = Cli;

