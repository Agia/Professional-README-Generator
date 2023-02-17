// Import required packages / modules
import inquirer from 'inquirer';
import fs from "fs/promises";
// Import function to generateMarkdown
import generateMarkdown from "./utils/generateMarkdown.mjs";

// Array of questions to be passed to inquirer.prompt
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

// Function to create, and write content, to README file
async function writeToFile(fileName, data) {
    await fs.writeFile(fileName, data);
}

// Function to run on program load
async function init() {
    // Store user input from prompt using the questions array
    const answers = await inquirer
        .prompt(questions)
        await writeToFile("README.md", generateMarkdown(answers));
}

// Call to function to initialize program
init();
