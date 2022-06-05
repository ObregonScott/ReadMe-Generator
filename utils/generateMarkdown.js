// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${projectDescription(data.description)}

  ## Table of Contents
  - [User Story](#userStory)
  - [Usage](#usage)
  - [Tests](#test)
  - [Technology](#technology)
  - [License](#license)
  - [Contributing](#contribution)
  - [Author](#credit)

  ## User Story

  ${userStory(data.userStory)}

  ## Usage

  ${projectUsage(data.usage)}

  ## Tests

  ${instructionInput(data.test)}

  ## Technology

  ${languages.join(', ')}

  ## License

  ${license.join(', ')}

  ## Contributing

  ## Author

`;
}

module.exports = generateMarkdown;
