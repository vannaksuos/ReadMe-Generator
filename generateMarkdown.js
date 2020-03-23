function generateMarkdown(data) {
  return `
# ${data.proImage}
# ${data.email}
# ${data.title}
# ${data.badges}
# ${data.description}
# ${data.contents}
# ${data.installation}
# ${data.usage}
# ${data.license}
# ${data.Contributing}
# ${data.test}
# ${data.questions}

`;
}

module.exports = generateMarkdown;
