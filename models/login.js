var config = require('./postgresConfig');
var conString = config.conString;
var pg = config.pg;

function login() {
    "use strict";
}

login.checkLogin = function (username, password, callback){
    pg.connect(conString, function(err, client, done){
        if (err){
            return console.error('error running query', err);
        }
        var queryStr = 'SELECT * FROM login where username = \''+ username + '\' and password = \''+ password+ '\'';
        console.log(queryStr);
        client.query(queryStr, function(err, result){
            done();
            callback(result);
        });
    });
};

module.exports = login;