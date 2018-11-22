const mysql = require('mysql');
let connection;

process.env.NODE_ENV === 'production' ? connection = mysql.createConnection(JAWSDB_URL) :
    connection = mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        password: process.env.DB_PASSWORD || 'root',
        user: process.env.DB_USER || 'root',
        database: process.env.DB_DATABASE || 'burger_db'
    });

connection.connect(err=> {
    if (err) {
        console.error(`Error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`)
});


module.exports=connection;