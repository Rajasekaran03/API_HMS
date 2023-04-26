const mysql = require('mysql2');

//create here mysql connection

const dbCon = mysql.createConnection({
    host: 'localhost',
    port:'3306',
    user: 'root',
    password: 'dev@PASSWORD2023',
    database: 'plenome_HMS'
});

dbCon.connect(function(error){
    if(error) throw error;
    console.log('Database connected successfully!!!');
    }
)

module.exports = dbCon;