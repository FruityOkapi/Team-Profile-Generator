const Employee = require('./employee.js')

class Intern extends Employee {
    constructor(school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool(){
        return this.school;
    }
}