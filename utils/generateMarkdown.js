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
    return `##License(s): 
      This project is licensed through ${license}.
      `
  }
  else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  <br>
  #Created by: ${data.name}
  <br>
  Github: ${username}
  <br>
  ________________________________________
  <br>
  #Description
  <br>
  ${data.description}
  <br>
  ________________________________________
  <br>
  #Table of Contents
  <br>
  *Installation Instructions
  <br>
  *Usage Information
  <br>
  *Contribution Guidelines
  <br>
  *Test Instructions
  <br>
  ________________________________________
  <br>
  #Installation Instructions
  <br>
  ${data.installation}
  <br>
  ________________________________________
  <br>
  #Usage Information
  <br>
  ${data.usage}
  <br>
  ________________________________________
  <br>
  #Contribution Guidelines
  <br>
  ${data.contribution}
  <br>
  ________________________________________
  <br>
  #Test Instructions
  <br>
  ${data.tests}
  <br>
  ________________________________________
  <br>
  ${renderLicenseSection(data.licenses)}
  <br>
  ${renderLicenseBadge(data.licenses)}
  <br>
  ${renderLicenseLink(data.licenses)}
`;
}

module.exports = generateMarkdown;
