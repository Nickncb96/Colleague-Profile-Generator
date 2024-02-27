const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./src/page-template");

const OUTPUT_DIR = "./output";
const outputPath = "./output/team.html";

// Function to prompt user for manager information
function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the manager's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the manager's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manager's email address:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the manager's office number:"
        }
    ]);
}

// Function to prompt user for engineer information
function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address:"
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub username:"
        }
    ]);
}

// Function to prompt user for intern information
function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email address:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school:"
        }
    ]);
}

//// Function to start the application
function init() {
    const teamMembers = [];

    // Prompt user for manager information
    promptManager()
        .then(managerData => {
            const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
            teamMembers.push(manager);
            return promptTeamMember(teamMembers); // Pass teamMembers to promptTeamMember
        })
        .then(() => {
            // Generate the HTML content
            const html = render(teamMembers);

            // Check if output directory exists/ create if the do not
            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR);
            }

            // Write HTML content to the file
            fs.writeFileSync(outputPath, html);

            console.log("Team page generated successfully!");
        })
        .catch(err => console.error(err));
}

// Function add another team member or finish building the team
function promptTeamMember(teamMembers) { // Receive teamMembers as parameter
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What type of team member would you like to add?",
            choices: ["Engineer", "Intern", "Finish building the team"]
        }
    ])
        .then(answer => {
            switch (answer.choice) {
                case "Engineer":
                    return promptEngineer()
                        .then(engineerData => {
                            const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
                            teamMembers.push(engineer);
                            return promptTeamMember(teamMembers); // Pass teamMembers repeatedly
                        });
                case "Intern":
                    return promptIntern()
                        .then(internData => {
                            const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
                            teamMembers.push(intern);
                            return promptTeamMember(teamMembers); // Pass teamMembers repeatedly
                        });
                default:
                    return Promise.resolve(teamMembers); // when finished resolve with teamMembers w
            }
        });
}

// Initialise the application
init();