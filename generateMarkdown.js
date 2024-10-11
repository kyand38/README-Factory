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

    case 'MIT License':
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;

    case 'BSD 2-Clause "Simplified" License':
      badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;

    case 'BSd 3-Clause "New" or "Revised License"':
      badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;

    case 'Boost Software License 1.0':
      badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;

    case 'Creative Commons Zero v1.0 Universal':
      badge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;

    case 'Eclipse Public License 1.0':
      badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;

    case 'GNU Affero General Public License v3.0':
      badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;

    case 'GNU General Public License v2.0':
      badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;

    case 'GNU Lesser General Public License v2.1':
      badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;

    case 'Mozilla Public License 2.0':
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;

    case 'The Unlicense':
      badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
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

    case 'MIT License':
      licenseLink = "[MIT License](https://www.gnu.org/licenses/gpl-3.0)";
      break;

    case 'BSD 2-Clause "Simplified" License':
      licenseLink = "[BSD 2-Clause Simplified](https://opensource.org/licenses/BSD-2-Clause)";
      break;

    case 'BSd 3-Clause "New" or "Revised License':
      licenseLink = "[BSd 3-Clause New or Revised License](https://opensource.org/licenses/BSD-3-Clause)";
      break;

    case 'Boost Software License 1.0':
      licenseLink = "[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)";
      break;

    case 'Creative Commons Zero v1.0 Universal':
      licenseLink = "[Creative Commons Zero v1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;

    case 'Eclipse Public License 1.0':
      licenseLink = "[Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)";
      break;

    case 'GNU Affero General Public License v3.0':
      licenseLink = "[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)";
      break;

    case 'GNU General Public License v2.0':
      licenseLink = "[GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;

    case 'GNU Lesser General Public License v2.1':
      licenseLink = "[GNU Lesser General Public License v2.1](https://www.gnu.org/licenses/lgpl-3.0)";
      break;

    case 'Mozilla Public License 2.0':
      licenseLink = "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.)";
      break;

    case 'The Unlicense':
      licenseLink = "[The Unlicense](http://unlicense.org/)";
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

    case 'MIT License':
      licenseSection = licenseCopy + renderLicenseLink(license);
      break;

    case 'BSD 2-Clause "Simplified" License':
      licenseSection = licenseCopy + renderLicenseLink(license);
      break;

    case 'BSd 3-Clause "New" or "Revised License':
      licenseSection = licenseCopy + renderLicenseLink(license);
      break;

    case 'Boost Software License 1.0':
      licenseSection = licenseCopy + renderLicenseLink(license);
      break;

    case 'Creative Commons Zero v1.0 Universal':
      licenseSection = licenseCopy + renderLicenseLink(license);
      break;

    case 'Eclipse Public License 1.0':
      licenseSection = licenseCopy + renderLicenseLink(license);
      break;

    case 'GNU Affero General Public License v3.0':
      licenseSection = licenseCopy + renderLicenseLink(license);
      break;

    case 'GNU General Public License v2.0':
      licenseSection = licenseCopy + renderLicenseLink(license);
      break;

    case 'GNU Lesser General Public License v2.1':
      licenseSection = licenseCopy + renderLicenseLink(license);
      break;

    case 'Mozilla Public License 2.0':
      licenseSection = licenseCopy + renderLicenseLink(license);
      break;

    case 'The Unlicense':
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
 -[Questions](#questions)<br/>

## Installation: 
${data.installation}

## Usage:
${data.usage}

## Credits:
${data.credits}


## License:
${renderLicenseSection(data.license)}

## Features
${data.features}

## Questions
${data.github}
${data.email}

`};

export default generateMarkdown;
