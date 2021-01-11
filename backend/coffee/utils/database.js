const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Fu512113',
    database: '109_project'
});

// test database connection
// pool.query('SELECT * FROM w11.clothing;',(err,results) => {
// if(err)console.log(err);
// else{
//     // console.log(results);
//     console.log(JSON.stringify(results));
//     console.log('Database connection successful.');
// }
// });

module.exports = pool.promise();