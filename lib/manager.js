const Employee = require('./employee.js')

class Manager extends Employee.Employee {
    constructor(name, id, email, officeNumber) {
        
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