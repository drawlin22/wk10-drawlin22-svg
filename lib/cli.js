const inquirer = require ('inquirer');
const {writeFile} = require('fs/promises');
const {createDocument} = require('./document');

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

.then(() => {
    return writeFile(
       ('..', 'examples','Generated.svg'),
        createDocument(this.shape, this.shapeColor, this.text, this.textColor)
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

// .then(({text}) => {
//     this.text = `${text}`;
// })

// .then(({shape}) => {
//     this.shape = `${shape}`;
// })

// .then (({textColor}) => {
//     this.textColor = `${textColor}`;
// })

// .then (({shapeColor}) => {
//     this.shapeColor = `${shapeColor}`;
// })
// .then ((response) => {
//     switch (response.shape){
//         case "circle":
//             shape = "Circle"
//             break;
//         case "triangle":
//             shape = "Triangle"
//             break;
//         case "square":
//             shape = "Square"
//             break;
//     }
// })