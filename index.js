const inquirer = require("inquirer");
const fs = require("fs");
const renderHtml = require("./assets/renderHtml");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "Where are you currently located?",
      name: "location",
    },
    {
      type: "input",
      message: "Give a brief bio",
      name: "bio",
    },
    {
      type: "input",
      message: "What is your LinkedIn username?",
      name: "linkedin",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
  ])
  .then((responses) => {
    console.log(responses);

    fs.writeFile('./index.html', renderHtml(responses), (err) =>
      err ? console.loc(err) : console.log("Success"));
  });
