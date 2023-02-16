// Import required packages / modules
import inquirer from 'inquirer';
import fs from "fs/promises";
import generateMarkdown from "./utils/generateMarkdown.js";

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
        }
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
        choices: ['MIT', 'Apache 2.0', 'BSD', 'GPL', 'LGPL', 'AGPL', 'Mozilla Public License'],
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Provide guidelines for contributing to your repo:',
        default() {
            return "Contributions, issues and feature requests are welcome!"
        }
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
async function writeToFile(fileName, data) {
    await fs.writeFile(fileName, data);
}

// Function to initialize program
async function init() {

    const answers = await inquirer
        .prompt(questions)
        await writeToFile("README.md", generateMarkdown(answers));
}

// Function call to initialize program
init();
