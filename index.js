const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt([
      {
      message: "Enter your GitHub username:",
      name: "username"
  },
  {
      message: "What do you want in your badges?",
      name: "badges"
  },
  {
      message: "Can you describe your project",
      name: "description"
  },
  {
      message: "What is your Table of Contents",
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
      message:"How did you tests it?",
      name: "tests"
  },
  {
      message:"Questions?",
      name:"questions"
  }

])
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res) {
       
        const proImage = res.data.avatar_url
        const email = res.data.email
        console.log(proImage,email);


    });
  });

