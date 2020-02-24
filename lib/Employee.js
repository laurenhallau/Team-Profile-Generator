// Constructor Class for Employee- Name, Id, Email

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    //return name
    getName() {
        return this.name;
    };
    //returns id
    getId() {
        return this.id;
    };
    //returns email
    getEmail() {
        return this.email;
    };
};
//export 
module.exports = Employee;