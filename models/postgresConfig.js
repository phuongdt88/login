var pg = require('pg');
var postgresDB = {
    host: "localhost",
    database: "userManagement",
    user: "postgres",
    port: "5432",
    password: "123456"
};

function PGDB(){
    "use strict";
}

PGDB.conString = "postgres://" + postgresDB.user + ":" +postgresDB.password + "@" + postgresDB.host + ":" + postgresDB.port + "/" + postgresDB.database + "?ssl=false";
PGDB.pg = pg;
module.exports = PGDB;

                 