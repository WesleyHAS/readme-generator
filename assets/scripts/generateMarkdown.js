// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache 2.0':
      return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    case 'GNU V3':
      return `![License: GNU V3](https://img.shields.io/badge/License-GNU%20V3-blue.svg)`;
    case 'MIT':
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case 'BSD 2-Clause':
      return `![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD%202%20Clause-orange.svg)`;
    case 'BSD 3-Clause':
      return `![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203%20Clause-orange.svg)`;
    case 'Boost Software License':
      return `![License: Boost Software License](https://img.shields.io/badge/License-Boost%20Software%20License-green.svg)`;
    case 'Creative Commons Zero V1':
      return `![License: Creative Commons Zero V1](https://img.shields.io/badge/License-Creative%20Commons%20Zero%20V1-green.svg)`;
    case 'Eclipse Public License 2.0':
      return `![License: Eclipse Public License 2.0](https://img.shields.io/badge/License-Eclipse%20Public%20License%202.0-purple.svg)`;
    case 'GNU Affero V3':
      return `![License: GNU Affero V3](https://img.shields.io/badge/License-GNU%20Affero%20V3-purple.svg)`;
    case 'GNU V2':
      return `![License: GNU V2](https://img.shields.io/badge/License-GNU%20V2-pink.svg)`;
    case 'GNU Lesser V2.1':
      return `![License: GNU Lesser V2.1](https://img.shields.io/badge/License-GNU%20Lesser%20V2.1-pink.svg)`;
    case 'Mozilla':
      return `![License: Mozilla](https://img.shields.io/badge/License-Mozilla-orange.svg)`;
    case 'The Unlincense':
      return `![License: The Unlincense](https://img.shields.io/badge/License-The%20Unlincense-red.svg)`;
    default:
      return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache 2.0':
      return `https://opensource.org/license/apache-2-0/`;
    case 'GNU V3':
      return `https://opensource.org/license/gpl-3-0/`;
    case 'MIT':
      return `https://opensource.org/license/mit/`;
    case 'BSD 2-Clause':
      return `https://opensource.org/license/bsd-2-clause/`;
    case 'BSD 3-Clause':
      return `https://opensource.org/license/bsd-3-clause/`;
    case 'Boost Software License':
      return `https://opensource.org/license/bsl-1-0/`;
    case 'Creative Commons Zero V1':
      return `https://creativecommons.org/publicdomain/zero/1.0/`;
    case 'Eclipse Public License 2.0':
      return `https://opensource.org/license/epl-2-0/`;
    case 'GNU Affero V3':
      return `https://opensource.org/license/agpl-v3/`;
    case 'GNU V2':
      return `https://opensource.org/license/gpl-2-0/`;
    case 'GNU Lesser V2.1':
      return `https://opensource.org/license/lgpl-2-1/`;
    case 'Mozilla':
      return `https://opensource.org/license/mpl-2-0/`;
    case 'The Unlincense':
      return `https://opensource.org/license/unlicense/`;
    default:
      return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'N/A') {
    return ``;
  } else {
    return `##License
    This project is licensed under ${license}.
    ${renderLicenseLink(license)}`;
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents (Optional)

  ‣ [Installation](#installation)
  ‣ [Usage](#usage)
  ‣ [Credits](#credits)
  ‣ [License](#license)
  ‣ [Badges](#badges)
  ‣ [Features](#features)
  ‣ [Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## Features
  ${data.features}

  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## Contact Information
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})`
};

module.exports = generateMarkdown;
