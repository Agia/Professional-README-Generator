// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  <img src="" alt="License badge" />

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

  ## Questions
  For further info about me, you can check out my GitHub profile [here](https://github.io/${data.username}).

  To contact me directly via email [here](mailto://${data.email}).
`;
}

module.exports = generateMarkdown;
