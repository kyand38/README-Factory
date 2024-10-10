// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case 'Apache License 2.0':
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case 'GNU General Public License v3.0':
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default: 
      badge = "";
       }
       return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  switch (license) {
    case 'Apache License 2.0':
      licenseLink = "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
      break;
    case 'GNU General Public License v3.0':
      licenseLink = "[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default: 
    licenseLink = "";
       }
       return licenseLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseCopy = "This application is covered under the following license: ";
  let licenseSection = "";
  switch(license){
    case 'Apache License 2.0':
      licenseSection = licenseCopy + renderLicenseLink(license);
      break;
    case 'GNU General Public License v3.0':
      licenseSection = licenseCopy + renderLicenseLink(license);
      break;
    default:
      licenseSection = "";  

    }
    return licenseSection;
}
//Avery helped me with the Table of contents
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return `# ${data.title}
 ${renderLicenseBadge(data.license)}

 ## Description
 ${data.description}
 
 ## Table of Contents:

 -[Installation](#installation)<br/>
 -[Usage](#usage)<br/>
 -[Credits](#credits)<br/>
 -[License](#license)<br/>
 -[Features](#features)<br/>
 -[How to Contribute](#howToContribute)<br/>

## Installation: 
${data.installation}

## Usage:
${data.usage}

## Credits:
${data.credits}


## License:
${renderLicenseSection(data.license)}<br/>

##

##
 

`;}

export default generateMarkdown;
