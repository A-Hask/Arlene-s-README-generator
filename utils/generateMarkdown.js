// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return ` ![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return '[License: Apache](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'MIT License') {
    return '[License: MIT License](https://opensource.org/licenses/MIT)'
  }
  if (license === 'BSD 3-Clause License') {
    return '[License: BSD 3-Clause NEW or REVISED License](https://opensource.org/licenses/BSD-3-Clause)'
  }
  if (license === 'Mozilla Public License 2.0') {
    return '[License: Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)'
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `
      This project is licensed through ${license}.
      `
  }
  else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}

  ## Created by: ${data.name}

  ## Github: ${data.username}

  ## Email: ${data.email}
  ________________________________________
  
  ## Description
  
  ${data.description}
  
  ________________________________________
  
  ## Table of Contents
  
  * [Installation Instructions](#installation-instructions)

  * [Usage Information](#usage-information)

  * [Contribution Guidelines](#contribution-guidelines)

  * [Test Instructions](#test-instructions)

  * [License or Licenses](#license-or-licenses)

  ________________________________________

  ## Installation Instructions

  ${data.installation}

  ________________________________________

  ## Usage Information

  ${data.usage}

  ________________________________________

  ## Contribution Guidelines

  ${data.contribution}

  ________________________________________

  ## Test Instructions

  ${data.tests}

  ________________________________________
  ## License or Licenses

  ${renderLicenseSection(data.licenses)}

  ${renderLicenseBadge(data.licenses)}

  ${renderLicenseLink(data.licenses)}
`;
}

module.exports = generateMarkdown;
