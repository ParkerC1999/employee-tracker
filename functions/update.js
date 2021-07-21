const inquirer = require('inquirer');

class Update {
    constructor(connect) {
        this.connect = connect;
    }
    updateEmployee() {
        this.connect.query('SELECT * FROM employees;', (err, rows) => {
            console.log(rows);
            inquirer.prompt ([
                {
                    type: 'list',
                    name: 'employUpdate',
                    message: 'Which employee would you like to update?',
                    choices: []
                }
            ])
        })
    }
}

module.exports = Update;