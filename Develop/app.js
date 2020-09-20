const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


//const id = []
const teamMember = [];
function app() {
    function getMan() {
        inquirer.prompt([
            {
                type: "input",
                name: "ManName",
                message: "what is your Managers's name?"
            },
            {
                type: "input",
                name: "ManId",
                message: "what is your id?"
            },
            {
                type: "input",
                name: "ManEmail",
                message: "what is your email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "what is the Managers office number?"
            }
        ]).then(response => {
            const manager = new Manager (response.ManName, response.ManId, response.ManEmail, response.officeNumber);
            console.log(response)
            teamMember.push(manager);
            //id.push(response.manId)
            addingNewMember()
        })
    }
    function getEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "what is the engineers name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "what is your id?"
            },
            {
                type: "input",
                name: "manEmail",
                message: "what is your Email?"
            },
            {
                type: "input",
                name: "Github",
                message: "what is your Github user name?"
            }
        ]).then(response => {
            const engineer = new Engineer(response.engineerName, response.manEmail, response.engineerId, response.Github);
            teamMember.push(engineer);
            //id.push(response.engineerId);
            addingNewMember();
        })
    }
    function getIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "what is your interns name?"
            },
            {
                type: "input",
                name: "internId",
                message: "what is your id?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "what is your email?"
            },
            {
                type: "input",
                name: "school",
                message: "From what school?"
            }
        ]).then(response => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.school); //--> {}
            teamMember.push(intern);
            //id.push(response,internId);
            addingNewMember();
        })
    }
    function addingNewMember() {
        inquirer.prompt([
            {
                type: "checkbox",
                name: "selectEmployees",
                message: "which employee?",
                choices: [
                    "engineer",
                    "intern",
                    "manager",
                    "done"
                ]
            },
        
        ]).then(response => {
            const role = response.selectEmployees;
            if(role == "manager"){
                getMan();
            }else if(role == "engineer"){
                getEngineer();
            }else if(role == "intern"){
                getIntern();
            }else if(role == "done"){
                renderTeam()
            }
        });
    }
    addingNewMember()
}
function renderTeam(){
 //write to file. 
    fs.writeFileSync(outputPath, render(teamMember), "utf-8")
    
}
app()




