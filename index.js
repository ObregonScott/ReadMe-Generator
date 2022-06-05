//Packages needed for this generator application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./Utils/generateMarkdown.js')

//Create and array of questions for user input
const questions = () => {
    inquirer.prompt([

        // Title Input
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter title!');
                    return false;
                }
            }
        },

        // Add Table of Contents
        {
            type: 'confirm',
            name: 'table',
            message: 'Would you like to include a table of Contents?',
            validate: tableInput => {
                if(tableInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        // Description Input
        {
            type: 'input',
            name: 'description',
            message: 'Please provide description of your project. (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Plese enter a description of your project!');
                    return false;
                }
            }
        },
        
        
        // Usage Input
        {
            type: 'input',
            name: 'usage',
            message: 'How would you like your application to be used?',
            validate: projectUsage => {
                if (projectUsage) {
                    return true;
                } else {
                    console.log('Please explain how to use your application!');
                    return false;
                }
            }
        },
        
        // Contributors Input
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed on this project?',
            validate: projectContributors => {
                if (projectContributors) {
                    return true;
                } else {
                    console.log('Did anyone contribute? Really? Cmon you can tell me....');
                    return false;
                }
            }
        },
        
        // Test Instructions Input
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter title!');
                    return false;
                }
            }
        },
        
        // What Licenses are you using?
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select appropriate licenses for this project.',
            choices: [
                "Academic",
                "Apache",
                "BSD 3-clause",
                'GP1v3',
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "OPEN",
                "OTHER",
                'NONE'
            ],
        },
        
        // Who authored this work?
        {
            type: 'input',
            name: 'credit',
            message: 'Who authored this work?',
            validate: creditInput => {
                if (creditInput) {
                    return true;
                } else {
                    console.log('Who wrote all of this?!?!');
                    return false;
                }
            }
        },
        
        // GitHub Username Input
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
            validate: projectUsername => {
                if (projectUsername) {
                    return true;
                } else {
                    console.log('Please enter user name!');
                    return false;
                }
            }
        },        
        
        // Email Input
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email, so others may contact you.');
                    return false;
                }
            }
        }
    ])
};

//TODO: Create a funtion to write README file
function writeToFile(fileName, data) {}

//TODO: Create a funtion to initialize app
function init() {}

// Funtion call to initialize app
init();