function generateMarkdown(data) {
  return `
# ![profile pic for school](${data.proImage})
vannaksuos@gmail.com
# Title:${data.title}
# [![Build Status](https://travis-ci.com/vannaksuos/ReadMe-Generator.svg?branch=master)](https://travis-ci.com/vannaksuos/ReadMe-Generator)
# Description
 ${data.description}
# Table of contents

* Title
* Description
* Table of Contents
* Installation
* Usage
* License
* Contribution
* Tests
* Questions
# Installation
${data.installation}
# Usage
${data.usage}
# License; ${data.license}
Copyright (c) 2020 Vannak Suos

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
# Contribution
${data.Contributing}
# Test
${data.test}
# Questions
${data.questions}

`;
}

module.exports = generateMarkdown;
