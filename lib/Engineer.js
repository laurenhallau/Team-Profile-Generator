// Constructor class for Engineer, required Employee

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        //grabs name, id and email from employee class
        super(name, id, email);
        //Assigns GitHubProfile 
        this.github = github;
    };
    //return GitHub Profile
    getGithub() {
        return this.github;
    };
    //return role as an engineer
    getRole() {
        return "Engineer";
    };
};

//export
module.exports = Engineer;