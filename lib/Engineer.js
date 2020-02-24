// Constructor class for Engineer, required Employee

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, gitHubProfile) {
        //grabs name, id and email from employee class
        super(name, id, email);
        //Assigns GitHubProfile 
        this.gitHub= gitHubProfile;
    };
    //return GitHub Profile
    getGitHub() {
        return this.gitHub;
    };
    //return role as an engineer
    getRole() {
        return "Engineer";
    };
};

//export
module.exports = Engineer;