// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) { }

const generateBadge = License =>{
  console.log(license)
  if(License === "MIT"){
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if(License === "GNU GPL 2.0"){
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }else if(License === "Apache License 2.0"){
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }else if(License === "GNU GPL 3.0"){
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }else if(License === "BSD License"){
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }else if(License === "ISC License"){
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

//function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

//function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  <h1 align="center> # ${data.title} </h1>

  ## Description

  ${data.description}

  ## Table of Contents
  - [User Story](#userStory)
  - [Usage](#usage)
  - [Tests](#test)
  - [Technology](#technology)
  - [License](#license)
  - [Contributing](#contribution)
  - [Author](#credit)

  ## User Story

  ${data.userStory}

  ## Usage

  ${data.usage}

  ## Tests

  ${data.test}

  ## Technology

  ${data.languages}

  ## License

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

  ## Contributing

  ${data.contribution}

  ## Author

  ${data.credit}

  
 https://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
