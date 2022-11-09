// TODO: Include packages needed for this application
const fs = require('fs');  
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);
const inquirer =require('inquirer')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
        message: 'Enter usage instructions for your project.  Be sure to save before closing the editor when you are done.',
        name: 'usage',
    },
    {
        type: 'editor',
        message: 'Enter contribution guidelines for your project.  Be sure to save before closing the editor when you are done.',
        name: 'contribution',
    },
    {
        type: 'editor',
        message: 'Enter test cases for your project.  Be sure to save before closing the editor when you are done.',
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

// TODO: Create a function to write README file
const writeToFile = async (fileName, data) => {
    try{
        await writeFileAsync(fileName, data);
        console.log('Your README.md is completed!');
    } catch (err) {
        console.log(err);
        console.log('There was an error writing your file.');
    }
};

// TODO: Create a function to initialize app
const init = async () => {
    console.log('Welcome to the README.md generator!');
        try {
            const answers = await questions();
            const md = generateMarkdown.generateMarkdown(answers);
            writeToFile('README.md', md);
        } catch (err) {
            console.log(err);
            console.log('There was an error with user input');
        }
};

// Function call to initialize app
init();
