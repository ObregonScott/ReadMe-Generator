//Packages needed for this generator application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

//Create and array of questions for user input
const questions = () => {
    return inquirer.prompt([

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

        // Description Input
        {
            type: 'input',
            name: 'description',
            message: 'Please provide description of your project. (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },

        // Add Table of Contents
        {
            type: 'confirm',
            name: 'table',
            message: 'Would you like to include a table of Contents?',
            defaut: true
        },

        // User Story Input
        {
            type: 'input',
            name: 'userStory',
            message: 'As a Developer, Why this application?',
            validate: userStory => {
                if (userStory) {
                    return true;
                } else {
                    console.log('Please submit a User Story!');
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

        // Test Instructions Input
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions? (Required)',
            validate: instructionInput => {
                if (instructionInput) {
                    return true;
                } else {
                    console.log('Please enter title!');
                    return false;
                }
            }
        },

        // What Technology or languages are you using?
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },

        // What Licenses are you using?
        {
            type: 'list',
            name: 'license',
            message: 'Please select appropriate licenses for this project.(select only ONE)',
            choices: [
                "Apache License 2.0",
                "BSD License",
                "GNU GPL 2.0",
                "ISC License",
                "MIT",
                "NONE"
            ],
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
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
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
    ]);
};

//TODO: Create a funtion to write README file
function initiate() {
    questions()
        .then((data) => {
            console.log(data)
            writeToFile(data);
        })
};


//TODO: Create a funtion to initialize app
function writeToFile(data) {
    fs.writeFile("./dist/README.md", generateMarkdown(data), err => {
        if (err) {
            return console.err(err);
        }
        console.log("Congratulations! README has been generated!")
    });
};

// Funtion call to initialize app
initiate();