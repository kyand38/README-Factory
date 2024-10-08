// TODO: Include packages needed for this application
import generateMarkdown from './generateMarkdown.js';
import inquirer from 'inquirer';
import fs from 'fs';
// used questions from 'https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide' for my input messages.
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    //pulled the same licenses from the dropdown menu on Github
    {
      type: 'list',
      name: 'license',
      message:'Choose a license for your repository:',
      choices: [
        'none',
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSd 3-Clause "New" or "Revised License"',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense',
      ],
      default: 'none',
    },
    {
      type: 'input',
      name: 'features',
      message: 'If your project has a lot of features, list them here.',
    },
    {
      type: 'input',
      name: 'howToContribute',
      message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
    },
];
// TODO: Create a function to write README file
inquirer.prompt(questions)
.then( answers) => {
    const content = produceReadme(answers);

};
// TODO: Create a function to initialize app

console.log()
// Function call to initialize app