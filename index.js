const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const markDown = require("./generateMarkdown");

inquirer
  .prompt([
      {
      message: "Enter your GitHub username:",
      name: "username"
  },
  { 
      message: "What is the Title?",
      name: "title"
  },
  {
      message: "What do you want in your badges?",
      name: "badges"
  },
  {
      message: "Can you describe your project?",
      name: "description"
  },
  {
      message: "What is your Table of Contents?",
      name: "contents"
  },
  {
      message: "How do you install it?",
      name:"installation"
  },
  {
      message: "How do you use it?",
      name:"usage"
  },
  {
      message: "Can you give us license info?",
      name:"license"
  },
  {
      message: "Any Contributing?",
      name:"Contributing"
  },
  {
      message:"How did you test it?",
      name: "test"
  },
  {
      message:"Questions?",
      name:"questions"
  }

])
  .then(function(answers) {
    const queryUrl = `https://api.github.com/users/${answers.username}`;

    axios.get(queryUrl).then(function(res) {  
        const proImage = res.data.avatar_url
        const email = res.data.email
    
        answers.proImage = proImage;
        answers.email = email;
        let markDownText = markDown(answers)
        console.log(answers)
        fs.writeFile("readme.md", markDownText, function(err) {
            if (err) {
              throw err;
            }
    
          });
        return {proImage, email};
        
    })
    
    });
    module.exports = {
        add: function (a, b) {
            return a + b;
        }
    };
