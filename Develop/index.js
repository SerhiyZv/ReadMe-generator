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
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'editor',
        message: 'Enter a description of your project.  Be sure to save before closing the editor when you are done.',
        name: 'description'
    },
    {
        type: 'editor',
        message: 'Enter installation instructions for your project.  Be sure to save before closing the editor when you are done.',
        name: 'installation'
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'Enter usage instructions for your project.  Be sure to save before closing the editor when you are done.',
    },
    {
        type: 'editor',
        name: 'contribution',
        message: 'Enter contribution guidelines for your project.  Be sure to save before closing the editor when you are done.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project',
        choices: ['Apache License 2.0', 
          'BSD 3-Clause \'New\' or \'Revised\' license', 
          'BSD 2-Clause \'Simplified\' or \'FreeBSD\' license', 
          'GNU General Public License (GPL)', 
          'GNU Library or \'Lesser\' General Public License (LGPL)', 
          'MIT license', 
          'Mozilla Public License 2.0', 
          'Common Development and Distribution License', 
          'Eclipse Public License version 2.0'],
    },

];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, JSON.stringify(data), (err) => {
        err ? console.error(err) : console.log("README created!");
    })
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then((response) => {
        console.log("Responses captured");
        writeToFile("README.md", response);
    })
}

// Function call to initialize app
init();
