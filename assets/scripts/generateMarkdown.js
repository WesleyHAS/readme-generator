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
      return 'https://opensource.org/license/apache-2-0/';
    case 'GNU V3':
      return 'https://opensource.org/license/gpl-3-0/';
    case 'MIT':
      return 'https://opensource.org/license/mit/';
    case 'BSD 2-Clause':
      return 'https://opensource.org/license/bsd-2-clause/';
    case 'BSD 3-Clause':
      return 'https://opensource.org/license/bsd-3-clause/';
    case 'Boost Software License':
      return 'https://opensource.org/license/bsl-1-0/';
    case 'Creative Commons Zero V1':
      return 'https://creativecommons.org/publicdomain/zero/1.0/';
    case 'Eclipse Public License 2.0':
      return 'https://opensource.org/license/epl-2-0/';
    case 'GNU Affero V3':
      return 'https://opensource.org/license/agpl-v3/';
    case 'GNU V2':
      return 'https://opensource.org/license/gpl-2-0/';
    case 'GNU Lesser V2.1':
      return 'https://opensource.org/license/lgpl-2-1/';
    case 'Mozilla':
      return 'https://opensource.org/license/mpl-2-0/';
    case 'The Unlincense':
      return 'https://opensource.org/license/unlicense/';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # <Your-Project-Title>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

‣ [Installation](#installation)
‣ [Usage](#usage)
‣ [Credits](#credits)
‣ [License](#license)
‣ [Badges](#badges)
‣ [Features](#features)
‣ [Tests](#tests)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

![alt text](assets/images/screenshot.png)

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.`;


}

module.exports = generateMarkdown;
