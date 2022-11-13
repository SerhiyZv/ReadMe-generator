// Variables declaration
const fs = require('fs');  
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);
const inquirer =require('inquirer')

// Arrays declaration of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your project.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter usage instructions for your project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines for your project.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test cases for your project.',
        name: 'test',
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
    {
        type: 'input',
        message: 'Enter your GitHub Username.',
        name: 'Github',
    }, 
    {
        type: 'input',
        message: 'Enter your email address.',
        name: 'email',
    },
]);
}

// writeToFile function to write README file
const writeToFile = async (fileName, data) => {
    try{
        await writeFileAsync(fileName, data);
        console.log('Your README.md is completed!');
    } catch (err) {
        console.log(err);
        console.log('There was an error writing your file.');
    }
};

// Initialization function
const init = async () => {
    console.log('Welcome to the README.md generator!');
        try {
            //when user prompts are finished then return answers to answers array
            const answers = await questions();
            //call the function in generateMarkdoen.js file to create the markdown for the readme file
            const md = generateMarkdown.generateMarkdown(answers);
            //call the writeToFile function and pass it the name 'README.MD' and the completed markdown
            writeToFile('README.md', md);
        } catch (err) {
            console.log(err);
            console.log('There was an error with user input');
        }
};

// Function call to initialize app
init();
