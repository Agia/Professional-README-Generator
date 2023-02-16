// Importing require packages / modules
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your repo?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Write a short description for your repo:',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for installation:',
        default() {
            return "No installation required."
        },
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage guidelines:'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose from the following licenses for your repo:',
        choices: ['MIT', 'Apache 2.0', 'BSD', 'GPL', 'LGPL'],
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Provide guidelines for contributing to your repo:'
    },

    {
        type: 'input',
        name: 'testing',
        message: 'Provide instruction for testing:'
    },

    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your contact email address for this repo?'
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, err => err && console.error(err));
}

// Function to initialize program
function init() {

    inquirer.prompt(questions)
    .then((answers) => {
        // console.log(JSON.stringify(answers, null, '  '));
        // fs.appendFile(`${answers.title}.md`, JSON.stringify(answers, null, '  '), err => err && console.error(err));
        
        writeToFile(`${answers.title}.md`, generateMarkdown(answers));
      });

}

// Function call to initialize program
init();
