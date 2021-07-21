const consoleTable = require('console.table');

class Role {
    constructor(connect) {
        this.connect = connect;
    }
    viewRoles() {
        this.connect.query('SELECT * FROM roles;', (err, rows) => {
            if (err) {
                console.log(err);
                return;
            }
            const table = consoleTable.getTable(rows);
            console.log(table);
        });
    }
}

module.exports = Role;