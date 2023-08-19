const inquirer = require ('inquirer');
const {writeFile} = require('fs/promises')
const {createDocument} = require('./document')
const shape = "";

class ClI {
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
// .then(({text}) => {
//     this.text = `${text}`;
// })

// .then (({shape}) => {
//     this.shape = `${shape}`;
// })

// .then (({textColor}) => {
//     this.textColor = `${textColor}`;
// })

// .then (({shapeColor}) => {
//     this.shapeColor = `${shapeColor}`;
// })
.then ((response) => {
    switch (response.shape){
        case "circle":
            shape = <circle cx="150" cy="100" r="80" fill="${response.shapeColor}" />
            break;
        case "triangle":
            shape = <polygon points="150, 18 244, 182 56, 182" fill="blue" />
            break;
        case "square":
            shape = ""
            break;
    }
})

.then(() => {
    return writeFile()
})

}
}

/*
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
*/

module.exports = Cli;