// License Links
// Object to match license names to URLS Opensource
const licensesLinks = {
  'MIT': 'https://opensource.org/licenses/MIT',               // MIT License 
  'Apache-2.0': 'http://www.apache.org/licenses/LICENSE-2.0', // Apache 2.0 License 
  'EPL-2.0': 'https://opensource.org/licenses/EPL-2.0',       // Eclipse Public License 2.0 
  'MPL-2.0': 'https://opensource.org/licenses/MPL-2.0',       // Mozilla Public License 2.0 
};

// MIT License: (permissive/few restrictions) do almost anything
// Apache-2.0: (permissve/few restrictions) includes patent rights(protects from other people selling/modifying) 
// EPL-2.0: "Eclipse Public License 2.0" .. provides patent protection .. need to disclose anychanges made to code
// MPL-2.0: "Mozilla Public License 2.0"  


// Function License Badge (1. of Starter Code)
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license) {    // if user selected license
      return `![License](https://img.shields.io/badge/license-${license}-pink.svg?style=for-the-badge)`;  // return badge image URL for license, color is pink, style for-the-badge
  }
  return '';    // if no license, return empty string
}

// TODO: Create a function that returns the license link (2. of Starter Code)
// If there is no license, return an empty string

// Function License Link
function renderLicenseLink(license) {
  if (license && licensesLinks[license]) {
      return `- [License](${licensesLinks[license]})`;  // markdown formatted string
  }
  return '';  // if no link, return empty string
}

// TODO: Create a function that returns the license section of README (3. of Starter Code)
// If there is no license, return an empty string

// Function that returns markdown string for license
function renderLicenseSection(license) {
  if (license && licensesLinks[license]) {
    // return markdown formatted string about license/includes link to license
    // ## License Heading 
      return `## License
This project uses the ${license} License;\n [view details on the ${license} [License](${licensesLinks[license]}).`;
  }

  return '';  // If no link, return empty string
}


// TODO: Create a function to generate markdown for README (Last step in Startercode)
// Order: TITLE, DESCRIPTION, TABLE OF CONTENTS, INSTALLATION, USAGE, LICENSE, CREDITS, CONTRIBUTION, TESTS, FEATURES, QUESTIONS (GITHUB USERNAME & GITHUB EMAIL)

function generateMarkdown(data) {

return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
  
${data.description}
  
## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Contributing](#contribution-guidelines)
- [Tests](#tests)
- [Features](#features)
- [Questions](#questions)
  
## Installation
  
${data.installation}
  
## Usage
  
${data.usage}
  
${renderLicenseSection(data.license)}
  
## Credits

${data.credits}
  
## Contribution Guidelines
  
${data.contribution}
  
## Tests
  
${data.tests}
  
## Features
  
${data.features}
  
## Questions
  
For any other questions or concerns you may have, 
<br>
Please contact me on Github.:mailbox:
<br>
Contact Info:
<br>
Name: Peyton
<br>
Github Username: [@${data.gitusername}](https://github.com/${data.gitusername})
<br>
Github Email: ${data.gitemail}
:e-mail:
  `;

}

module.exports = generateMarkdown;
// export function generateMarkdown so index.js canuse it

