// Packages needed for this application
const inquirer = require('inquirer');
const validator = require('email-validator');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// Array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is your project's name?",
    "Please write a short description of your project:",
    "What kind of license should your project have?",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?",
];
const [usernameQ, emailQ, projectQ, descriptionQ, licenseQ, dependenciesQ, testQ, usageQ, contributionsQ] = questions;

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Success!")
    );
}


// Function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: usernameQ,
                name: "username",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (input === "") {
                            done("You need to provide an username");
                            return;
                        }
                        done(null, true);
                    }, 50);
                }
            },
            {
                type: "input",
                message: emailQ,
                name: "email",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (input === "") {
                            done("You need to provide an email");
                            return;
                        }
                        if (!validator.validate(input)) {
                            done("That's not a valid email address!")
                            return;
                        }
                        done(null, true);
                    }, 50);
                }
            },
            {
                type: "input",
                message: projectQ,
                name: "project",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (input === "") {
                            done("You need to provide a project name");
                            return;
                        }
                        done(null, true);
                    }, 50);
                }
            },
            {
                type: "input",
                message: descriptionQ,
                name: "description",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (input === "") {
                            done("You need to provide a description");
                            return;
                        }
                        if (input.length < 50) {
                            done("Too short, please provide a longer description");
                            return;
                        }
                        done(null, true);
                    }, 50);
                }
            },
            {
                type: "list",
                message: licenseQ,
                name: "license",
                choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause 'Simplified' license", "BSD 3-clause 'New' or 'Revised' license", "BSD 3-clause Clear license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The F*ck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License", "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "PostgreSQL License", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]
            },
            {
                type: "input",
                message: dependenciesQ,
                name: "dependencies",
            },
            {
                type: "input",
                message: testQ,
                name: "test",
            },
            {
                type: "input",
                message: usageQ,
                name: "usage",
                validate: function (input) {
                    const done = this.async();
                    setTimeout(function () {
                        if (input === "") {
                            done("You need to provide usage instructions");
                            return;
                        }
                        if (input.length < 50) {
                            done("Too short, please provide more instructions");
                            return;
                        }
                        done(null, true);
                    }, 50);
                }
            },
            {
                type: "input",
                message: contributionsQ,
                name: "contributions",
            },
        ])
        .then((data) => {
            let fileName = "./generated_README_files/README.md";
            const path = "./generated_README_files/README.md";
            try {
                if (fs.existsSync(path)) {
                    inquirer
                        .prompt([
                            {
                                type: "confirm",
                                message: "This file name already exists, would you like to override it?",
                                name: "override",
                                default: "y",
                            }
                        ])
                        .then((override) => {
                            if (override) {
                                writeToFile(fileName, generateMarkdown(data));
                            } else {
                                var projectName = data.project
                                projectName = projectName.replace(/\s+/g,"-").toLowerCase();
                                fileName = `./generated_README_files/README-${projectName}.md`;
                                writeToFile(fileName, generateMarkdown(data));
                            }
                        })
                } else {
                    writeToFile(fileName, generateMarkdown(data));
                }
            } catch (err) {
                console.error(err);
            }
        });
}

// Function call to initialize app
init();
