const inquirer = require('inquirer');
const db = require('./db/connection');
const Department = require('./functions/department');
const Role = require('./functions/role');
const Update = require('./functions/update');

const info = () => {
    return inquirer.prompt([
        { // Start?
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all all roles', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
}

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

db.connect(err => {
    // console.log("stuff");
    if (err) throw err;
    console.log('Database connected.')
});

info()
    .then((answers) => {
        // console.log(answers);
        if (answers.options === 'View all departments') {
            var department = new Department(db);
            department.viewDepartments();
        }
        if (answers.options === 'Add a department') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'department',
                    message: 'Write the name of the department you would like to add.',
                }
            ]).then(answer => {
                var department = new Department(db);
                department.addDepartment(answer.department);
            })
        }
        if (answers.options === 'View all all roles') {
            var role = new Role(db);
            role.viewRoles();
        }
        if (answers.options === 'Add a role') {
            // add prompts
        }
        if (answers.options === 'Update an employee role') {
            var newUpdate = new Update(db);
            newUpdate.updateEmployee();
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