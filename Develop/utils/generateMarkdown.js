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
    return '![License: Apache](https://www.apache.org/foundation/press/kit/feather.png)'
  }
  if (license === 'MIT License') {
    return '![License: MIT License](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png)'
  }
  if (license === 'BSD 3-Clause License') {
    return '![License: BSD 3-Clause NEW or REVISED License](https://opensource.org/files/OSI_Approved_License.png)'
  }
  if (license === 'Mozilla Public License 2.0') {
    return '![License: Mozilla Public License 2.0](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mozilla_logo.svg/400px-Mozilla_logo.svg.png)'
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `##License(s)
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
  ##Description 
  ${data.description}
  ##Table of Contents
  *Installation Instructions
  *Usage Information
  *Contribution Guidelines
  *Test Instructions
  ##Installation Instructions
  ${data.installation}
  ##Usage Information
  ${data.usage}
  ##Contribution Guidelines
  ${data.contribution}
  ##Test Instructions
  ${data.tests}
  ${renderLicenseSection(data.licenses)}
  ${renderLicenseBadge(data.licenses)}
  ${renderLicenseLink(data.licencses)}
`;
}

module.exports = generateMarkdown;
