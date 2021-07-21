const consoleTable = require('console.table');

class Department {
    constructor(connect) {
        this.connect = connect;
    }
    viewDepartments() {
        this.connect.query('SELECT * FROM department;', (err, rows) => {
            if (err) {
                console.log(err);
                return;
            }
            const table = consoleTable.getTable(rows);
            console.log(table);
        });
    }
    addDepartment(department) {
        this.connect.query('INSERT INTO department SET ?;', {name: department}, (err, rows) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Department added!');
        })
    }
}

module.exports = Department;