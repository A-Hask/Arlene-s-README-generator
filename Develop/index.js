// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project. (Required)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions. (Required)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used? (Required)'
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
        type: 'checkbox',
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
            writeToFile('README.md', generateMarkdown({ userInput }))
        })
}

// Function call to initialize app
init();
