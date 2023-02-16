// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [License](#License)
  5. [Contribution](#Contribution)
  6. [Testing](#Testing)
  7. [Questions](#Questions)

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
