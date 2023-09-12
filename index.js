// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/scripts/generateMarkdown');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the tittle of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Describre how to install your application if there is an installation.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Describe how can someone use your application.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List collaborators, third-party assets, tutorials or any kind of credits.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select what license you would like to use. If no license needed select N/A.',
      choices: ['Apache 2.0', 'GNU V3', 'MIT','BSD 2-Clause', 'BSD 3-Clause', 'Boost Software License', 'Creative Commons Zero V1', 'Eclipse Public License 2.0', 'GNU Affero V3', 'GNU V2', 'GNU Lesser V2.1', 'Mozilla', 'The Unlincense', 'N/A']
    },
    {
      type: 'input',
      name: 'features',
      message: 'List the features of your project.',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Input instructions on how to contribute on this proejct.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide instructions on how to run tests your application.',
    },

    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.'
    },
  ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md', data, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('response saved to answers.txt');
    }
  })
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((data) => {
      const dataMarkdown = generateMarkdown(data);
      writeToFile('README.txt', dataMarkdown);
    })
    .catch((err) => {
      console.error('Something went wrong:', err.message); // Log the specific error message
    });
};

// Function call to initialize app
init();