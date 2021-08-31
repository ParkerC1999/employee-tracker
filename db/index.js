const index = require('../index');
const connect = require('./connection');
require('console.table');
const inquirer = require('inquirer');
const info = require('../index');

class Database {
    constructor(connect) {
        this.connect = connect
    }
    viewEmployees() {
        return this.connect.promise().query('SELECT * FROM employees;')
        
    }
    viewRoles() {
        return this.connect.promise().query('SELECT * FROM roles;')
    }
    viewDepartments() {
        return this.connect.promise().query('SELECT * FROM department;')
        
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
        let roles = [];
        this.connect.query('SELECT * FROM roles', (err, rows) => {
            for (let i = 0; i < rows.length; i++) {
                roles.push(rows[i].id + ',' + rows[i].name)
            }
        });
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