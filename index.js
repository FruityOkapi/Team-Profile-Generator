// Dependencies
const inquirer = require('inquirer');
const cardHTML = require('./src/cardHTML');
const htmlStart = require('./src/htmlTop');
const htmlEnd = require('./src/htmlBottom');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const fs = require('fs');
const style = require('./src/stylesheet');

// Needed objects and functions
const employeesArray = [];
const cards = [];
const managerIcon = 'https://i.imgur.com/pmSlEEM.png';
const engineerIcon = 'https://i.imgur.com/0I4egbT.png';
const internIcon = 'https://i.imgur.com/AeaiQth.png';

const addTeamMember = () => inquirer.prompt([
    {
        type: 'list',
        name: 'answer',
        message: "Do you wish to add a new team member?",
        choices: ['Yes', 'No'],
        filter(x) {
            if (x == 'Yes') {
                return true;
            } else if (x == 'No') {
                return false;
            }
        }
    }
])
.then((userInput) => {
    const {answer} = userInput
    if (answer == true) {
        roleSelect()
    } else if (answer == false) {
        console.log('Now building your team!');
        fileGenerator();
    }
});

const roleSelect = () => inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: "Please select a role for the new team member",
        choices: ['Engineer', 'Intern'],
    }
])
.then((userInput) => {
    const {role} = userInput
    if (role == 'Engineer') {
        addEngineer();
    } else {
        addIntern();
    }
});

const addEngineer = () => inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Please enter your engineer's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the engineer's id:",
        filter(x){
            return parseInt(x)
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your engineer's email:"
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter your engineer's GitHub username:"
    },
])
.then((userInput) => {
    const { name, id, email, github} = userInput;
    const newEngineer = new engineer.Engineer(name, id, email, github);
    employeesArray.push(newEngineer);
    addTeamMember();
})

const addIntern = () => inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Please enter your intern's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter your intern's id:",
        filter(x){
            return parseInt(x)
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your intern's email:"
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter your intern's school/university"
    }
])
.then((userInput) => {
    const {name, id, email, school} = userInput;
    const newIntern = new intern.Intern(name, id, email, school);
    employeesArray.push(newIntern);
    addTeamMember();
});
const fileGenerator = () => {
    const fileStart = htmlStart.htmlTop;  
    const fileEnd = htmlEnd.htmlBottom;
    let styling = style.style;
    fs.writeFile('./dist/style.css', styling, (error) => 
        (error) ? console.log(error) : console.log('Style sheet also generated!'));
    fs.writeFile("./dist/index.html", fileStart, (error) => 
    error ? console.log(error) : console.log('README file generated successfully!')
    );
    const timer = (x) => {
        setTimeout(() => {
            fs.appendFile('./dist/index.html', fileEnd, (error) => {error ? console.log(error) : console.log("Finished making your profile!!")})
        },x)
    };
    let time = employeesArray.length * 1000;
    timer(time)
    for (let i = 0; i < employeesArray.length; i++) {
        let person = employeesArray[i];
        let name = person.name;
        let id = person.id;
        let role = person.getRole();
        let email = person.email;
        let thirdOpt;
        let thirdOptInput;
        let icon;
        switch(role){
            case 'Manager':
                thirdOpt = 'Office Number:';
                thirdOptInput = person.officeNumber;
                icon = managerIcon;
                break;
            case 'Engineer':
                thirdOpt = 'Github:';
                thirdOptInput = person.getGithub();
                icon = engineerIcon;
                break;
            case 'Intern':
                thirdOpt = 'School:'
                thirdOptInput = person.getSchool();
                icon = internIcon;
        };
        let addCard = cardHTML.cardHTML(icon, name, role, id, email, thirdOpt, thirdOptInput);
        fs.appendFile('./dist/index.html', addCard, (error) =>
        error ? console.log(error) :console.log(`Added ${name}!`));
        fs.appendFile('./dist/index.html', fileEnd, (error) => 
            (error) ? console.log(error) : console.log('Finished your team profile page!')
        );
    }  
}

// Initial prompt set
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Please enter your team manager's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter your team manager's ID:",
        filter(x) {
            return parseInt(x);
        }
    },
    {
        type:'input',
        name:'email',
        message: "Please enter your team manager's email address:"
    },
    {
        type: 'input',
        name:'officeNumber',
        message:"Please enter your team manager's office number:",
        filter(x) {
            return parseInt(x);
        }
    },
])
.then((userInput) => {
    const { name, id, email, officeNumber} = userInput;
    const teamManager = new manager.Manager(name, id, email, officeNumber);
    employeesArray.push(teamManager);
    addTeamMember();
});