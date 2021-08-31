const mySql = require('mysql2');

const connect = mySql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'LoogNoog%902',
    database: 'tracker'
});

connect.connect(function(err) {
    if(err){
        throw(err)
    }
})

module.exports = connect;