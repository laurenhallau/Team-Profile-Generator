//Constructor class for Manager, including office number

const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    //returns office number
    getOfficeNumber() {
        return this.officeNumber;
    };
    //role
    getRole() {
        return "Manager";
    };
};
//export
module.exports = Manager; 
