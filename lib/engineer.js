const Employee = require('./employee.js')

class Engineer extends Employee.Employee {
    constructor(name, id, email, github) {
        if (typeof github != 'string' || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        };
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
       return `<a href="https://github.com/${this.github}">${this.github}</a>`;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = {
    Engineer
}