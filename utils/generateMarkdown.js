// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribution](#Contribution)
  - [Testing](#Testing)
  - [Questions](#Questions)

  <hr>

  <img src="https://img.shields.io/badge/License-${data.license}-4C4C9D?style=for-the-badge" alt="License badge" />

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This repo is licensed using the ${data.license} license.

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.testing}

  <hr>

  ## Questions
  For further info about me, you can check out my GitHub profile [**here**](https://github.com/${data.username}).

  To contact me directly, you can reach me via email [**here**](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
