const Employee = require('./employee.js')

class Manager extends Employee.Employee {
    constructor(name, id, email, officeNumber) {
        if (typeof officeNumber !== 'number' || isNaN(officeNumber) || officeNumber < 0) {
            throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
        }
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = {Manager} 