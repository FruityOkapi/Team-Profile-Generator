const Employee = require('./employee.js')

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub(){
        return this.github;
    }
}