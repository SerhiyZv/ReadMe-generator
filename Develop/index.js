// TODO: Include packages needed for this application
const fs = require('fs');  
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.watchFile);
const inquirer =require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your project title?",
        name: "Project Title"
    },
    {
        type: 'input',
        message: "Enter a project description",
        name: "Description"
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, JSON.stringify(data), (err) => {
        err ? console.error(err) : console.log("README created!");
    })
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log("Responses captured");
        writeToFile("Test-README.md", response);
    })
}

// Function call to initialize app
init();
