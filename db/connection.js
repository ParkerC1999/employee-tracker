const mySql = require('mysql2');

const db = mySql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'LoogNoog%902',
    database: 'tracker'
});

module.exports = db;