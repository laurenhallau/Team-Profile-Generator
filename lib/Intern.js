// Constructor Class for Intern

//requires employee
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        //get name, id, email from employee
        super(name, id, email);
        this.school = school;
    };
    //returns employee's school
    getSchool() {
        return this.school;
    };
    //return role 
    getRole() {
        return "Intern";
    };
};
//export 
module.exports = Intern;