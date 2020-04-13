function generateMarkdown(data) {
  return `
# ![profile pic for school](${data.proImage})

# Email:(${data.email})

# Deploy Github link
${data.deploy}

# Title:${data.title}

# Badges
${data.badges}

# Description
${data.description}

# Table of contents
${data.contents}

# Installation
${data.installation}

# Usage
${data.usage}

# License
${data.license}

# Contribution
${data.contributing}

# Test
${data.test}

# Email
${data.questions}

# Demo
${data.Gif}

`;
}

module.exports = generateMarkdown;
