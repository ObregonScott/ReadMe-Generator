// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) { }

const generateBadge = License => {
  console.log(License)
  if (License === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (License === "BSD License") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (License === "GNU GPL 2.0") {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  } else if (License === "ISC License") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } else if (License === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let renderLicenseLink = license => {
  if (license === 'Apache') {
    return `Apache
Copyright (c) ${new Date().getFullYear()}

for more information about Apache license click [Link](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'BSD 3-clause') {
    return `BSD 3-clause
Copyright (c) ${new Date().getFullYear()}

for more information about BSD 3-clause license click [Link](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === 'GPLv2') {
    return `GPLv2
  Copyright (c) ${new Date().getFullYear()}

  for more information about GPlv2 license click [Link](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
  `
  } else if (license === 'ISC License') {
    return `ISC License
  Copyright (c) ${new Date().getFullYear()}

  for more information about ISC License click [link](https://opensource.org/licenses/ISC)`
  } else if (license === 'MIT') {
    return `MIT
Copyright (c) ${new Date().getFullYear()}
     
for more information about MIT License click [link](https://opensource.org/licenses/MIT)`
  } else if (license === 'None') {
    return `This application doesnt have any form of licensing`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Table of Contents
  - [Description](#description)
  - [User Story](#userStory)
  - [Instructions](#instructions)
  - [Usage](#usage)
  - [Technology](#technology)
  - [License](#license)
  - [Contributing](#contributing)
  - [Author](#author)
  - [Questions](#questions)
  - [Links](#links)
  
  ## Description
  ${data.description}

  ## User Story

  ${data.userStory}

  ## Instructions

  ${data.test}

  ## Usage

  ${data.usage}

  ## Technology

  ${data.languages.join(', ')}

  ## License

  ${generateBadge(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Contributing

  ${data.contribution}

  ## Author

  ${data.credit}

  ### Questions:
  For further questions you can email me at:<br />
  ${data.email}
  
  ### Links:
  You can find me on [GitHub](https://github.com/${data.github})
  
`;
}

module.exports = generateMarkdown;
