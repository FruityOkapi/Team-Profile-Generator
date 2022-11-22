const Employee = require('./employee.js')

class Intern extends Employee.Employee {
    constructor(name, id, email, school) {
        if (typeof school != 'string' || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        };
        super(name, id, email)
        this.school = school;
    }

    getSchool(x){
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = {
    Intern
}