// Dependencies
const inquirer = require('inquirer');
const cardHTML = require('./src/cardHTML');
const htmlsrc = require('./src/htmlsrc');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const fs = require('fs');

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
        choices: ['Yes', 'No']
    }
])
.then((userInput) => {
    const {answer} = userInput
    if (answer = 'Yes') {
        roleSelect()
    } else {
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
    if (role = 'Engineer') {
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
        message: "Please enter the engineer's Id:"
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
    const newEngineer = new engineer.Engineer(userInput);
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
        message: "Please enter your intern's Id:"
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
    const newIntern = new intern.Intern(userInput);
    employeesArray.push(newIntern);
    addTeamMember();
});

const fileGenerator = () => {
    for(let i = 0; i < employeesArray.length; i++) {
        let {name, id , email } = employeesArray[i]
        let role = employeesArray[i].getRole();
        let thirdOpt;
        let thirdOptInput;
        let icon;
        switch(role){
            case 'Manager':
                thirdOpt = 'Office Number:';
                thirdOptInput = employeesArray[i].officeNumber;
                icon = managerIcon;
                break;
            case 'Engineer':
                thirdOpt = 'Github:';
                thirdOptInput = employeesArray[i].getGithub();
                icon = engineerIcon;
                break;
            case 'Intern':
                thirdOpt = 'School:'
                thirdOptInput = employeesArray[i].getSchool()
                icon = internIcon;
        }

        let genCards = cardHTML.cardHTML(icon, name, id, email, thirdOpt, thirdOptInput);
        cards.push(genCards);
    }
    let htmlContent = JSON.stringify(cards);
    let htmlGen = htmlsrc.htmlsrc(cards);
    fs.writeFile('./dist/index.html', htmlGen, (error) => 
        error ? console.log(error) : console.log('README file generated successfully!'))
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
        message: "Please enter your team manager's ID:"
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
    },
])
.then((userInput) => {
    const teamManager = new manager.Manager(userInput);
    employeesArray.push(teamManager);
    addTeamMember();
});