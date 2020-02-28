const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output", "team.html");
const render = require("./lib/htmlRenderer");

const teamMembers = [];

function createManager () {
    inquirer
    .prompt([
        {
            type : "input",
            name : "managerName",
            message: "Please enter the Manager name",
            validate: answer => {
                if(answer !== "") {
                    return true;
                }
                return "Please enter complete name";
            }
        },
        {
            type : "input",
            name : "managerID",
            message: "Please enter the Manager ID",
            validate: answer => {
                var pass = answer.match( /^[1-9]\d*$/); 
                if(pass) {
                    return true
                }
                return "Please enter a number greater than zero";
            }
        },
        {
            type : "input",
            name : "managerEmail",
            message: "Please enter the Manager email",
            validate: answer => {
                var pass = answer.match( /\S+@\S+\.\S+/); 
                if(pass) {
                    return true
                }
                return "Please enter a valid email";
            }
        },
        {
            type : "input",
            name : "managerOffice",
            message: "Please enter the Manager office number",
            validate: answer => {
                var pass = answer.match( /^[1-9]\d*$/); 
                if(pass) {
                    return true
                }
                return "Please enter a number greater than zero";
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager (answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);
        console.log(manager);
        teamMembers.push(manager);
        createTeam();
    })
}
function createTeam() {
    inquirer
    .prompt([
        {
            type : "list",
            name : "teamMemberChoice",
            message: "Which type of team member do you want to add?",
            choices: ["Engineer", "Intern", "No More. Ready to print to HTML"],
        }
    ]).then(answers => {
        switch (answers.teamMemberChoice) {
            case "Engineer":
                console.log("engineer");
                break;
            case "Intern" :
                console.log("intern");
                break;
            default : 
                console.log("build your team");
        }
    })
}
createManager();