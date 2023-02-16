// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  <img src="https://img.shields.io/badge/License-${data.license}-4C4C9D?style=for-the-badge" alt="License badge" />

  ## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribution](#Contribution)
  - [Testing](#Testing)
  - [Questions](#Questions)

  <hr>


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  <img src="https://img.shields.io/badge/License-${data.license}-4C4C9D?style=flat-square" alt="License badge" />

  The code in this repo is licensed under the ${data.license} license.

  For more information about the different licenses, and what they each cover, you can find a clear overview [here](https://choosealicense.com/licenses/) of many of the most commonly used licenses available.

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
