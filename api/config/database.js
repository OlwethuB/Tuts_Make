const mysql = require('mysql2');
require("dotenv").config();

// Create the connection to database 

const db = mysql.createConnection({
    host: 'process.env.db_host',
    user: 'process.env.db_user',
    password: 'process.env.db_pass',
    database: 'process.env.db_name',
});

// export default db;
