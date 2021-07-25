const inquirer = require('inquirer');
const database = require('./db');

const info = () => {
    return inquirer.prompt([
        { // Start?
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
}

// const updateRole = () => {
    
// }

// const next = () => {
//     return inquirer.prompt([
//         { // Start?
//             type: 'confirm',
//             name: 'confirm',
//             message: 'Would you like to do another operation?',
//             default: true
//         }
//     ])
// }

info()
    .then((answers) => {
        // console.log(answers);
        if (answers.options === 'View all departments') {
            // console.log(Database);
            database.viewDepartments();
            info();
        }
        if (answers.options === 'Add a department') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'department',
                    message: 'Write the name of the department you would like to add.',
                }
            ]).then(answer => {
                database.addDepartment(answer.department);
            })
        }
        if (answers.options === 'View all all roles') {
            database.viewRoles();
        }
        if (answers.options === 'Add a role') {
            // add prompts
        }
        if (answers.options === 'Update an employee role') {
            database.updateEmployee();
        }
        if (answers.options === 'View all employees') {
            database.viewEmployees();
            
        }
        if (answers.options === 'Add an employee') {
            // add promts
        }

        // next().then(function confirm() {
        //     info();
        // },
        // function cancelled() {
        //     console.log('bye');
        // })
    });