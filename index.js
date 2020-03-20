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
  }
  
])
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res) {
       
        const proImage = res.data.avatar_url
        const email = res.data.email
        console.log(proImage,email);

    //   fs.writeFile("repos.txt", repoNamesStr, function(err) {
    //     if (err) {
    //       throw err;
    //     }

    //     console.log(`Saved ${repoNames.length} repos`);
    //   });
    });
  });

