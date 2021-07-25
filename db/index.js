const index = require('../index');
const connect = require('./connection');
require('console.table');

class Database {
    constructor(connect) {
        this.connect = connect
    }
    viewEmployees() {
        this.connect.query('SELECT * FROM employees;', (err, rows) => {
            if (err) {
                console.log(err);
                return;
            }
            console.table(rows);
        });
    }
    viewRoles() {
        this.connect.query('SELECT * FROM roles;', (err, rows) => {
            if (err) {
                console.log(err);
                return;
            }
            console.table(rows);
        });
    }
    viewDepartments() {
        this.connect.query('SELECT * FROM department;', (err, rows) => {
            if (err) {
                console.log(err);
                return;
            }
            console.table(rows);
        });
    }
    addDepartment(department) {
        this.connect.query('INSERT INTO department SET ?;', { name: department }, (err, rows) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Department added!');
        })
    }
    updateEmployee() {
        this.connect.query('SELECT * FROM employees;', (err, rows) => {
            // console.log(rows);
            var choiceArray = [];
            for (let i = 0; i < rows.length; i++) {
                var fullName = rows[i].first_name + ' ' + rows[i].last_name;
                // console.log(fullName);
                choiceArray.push(fullName);
            }

            inquirer.prompt([
                {
                    type: 'list',
                    name: 'employUpdate',
                    message: 'Which employee would you like to update?',
                    choices: choiceArray
                }
            ]).then(res => {
                var employUpdate = res.employUpdate;
                role.viewRoles().then(([rows]) => {
                    var get = rows;
                    var select = get.map(({ id, title }) => ({
                        name: title,
                        value: id
                    }));
                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'employeeRole',
                            message: 'Which role would you like the employee to have?',
                            choices: select
                        }
                    ]).then(res => {
                        role.updateEmployee(employUpdate, res.employeeRole)
                    }).then(() => {
                        index.info();
                    })
                })
            })
        })
    }
}

module.exports = new Database(connect);