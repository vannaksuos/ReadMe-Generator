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
        message: "Whats your link to your deploy github",
        name:"deploy"
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
        message: "List each section of your table of contents, separated by a comma",
        name: "contents",
        
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
        message: "Any Contribution?",
        name:"contributing"
    },
    {
        message:"How did you test it?",
        name: "test"
    },
    {
        message:"If you have any questions for me, please email me at",
        name:"questions"     
    },
    
    {
        message: "Do you have an Gif Demo",
        name: "Gif"
    },


])
  .then(function(answers) {
    const queryUrl = `https://api.github.com/users/${answers.username}`;

    axios.get(queryUrl).then(function(res) {  
        const proImage = res.data.avatar_url
        const email = res.data.email
    
        answers.proImage = proImage;
        answers.email = email;
        let updateStr = "<br/>"

        let tableContent =answers.contents
        let tableContentArray = tableContent.split(",") 
        for(let i = 0; i < tableContentArray.length; i++) {
            let str = `${i + 1}. ${tableContentArray[i].trim()}<br/>`
            updateStr += str
        }
            answers.contents = updateStr

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
