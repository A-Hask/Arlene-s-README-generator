// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: async (input) => {
            if (input.length < 3) {
                console.log(' <-- Name must have at least 4 characters');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: async (input) => {
            if (input.length < 3) {
                console.log(' <-- Name must have at least 4 characters');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: async (input) => {
            if (input.length < 3) {
                console.log(' <-- Username must have at least 4 characters');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: async (input) => {
            if (input.length < 3) {
                console.log(' <-- Title must have at least 4 characters');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project. (Required)',
        validate: async (input) => {
            if (input.length < 3) {
                console.log(' <-- Description must have at least 4 characters');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions. (Required)',
        validate: async (input) => {
            if (input.length < 3) {
                console.log(' <-- Input must have at least 4 characters');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used? (Required)',
        validate: async (input) => {
            if (input.length < 3) {
                console.log(' <-- Input must have at least 4 characters');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can someone make contributions?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Add test code here.'
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Choose your license(s).',
        choices: ['None', 'MIT License', 'Apache License 2.0', 'BSD 3-Clause License', 'Mozilla Public License 2.0'],
    }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput);
            writeToFile('README.md', generateMarkdown(userInput));
        })
}

// Function call to initialize app
init();