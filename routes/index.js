var express = require('express');
var router = express.Router();
var login = require('../models/login');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res){
    res.render('login', {
        title: 'Login Page'
    });
});

router.post('/loginProcess', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    login.checkLogin(username, password, function(result){
        if (result.rowCount == 0){
            res.redirect('./login');
        }
        else{
            res.render('profile', {
                title: 'User\'s Profile',
                data: result.rows
            });
        }
    });
});

router.get('/register', function(req, res){
    res.render('register',{
        title: 'Reigistration page'
    });
});

router.post('regProcess', function(req, res){
    fullname = req.body.fullname;
    gender = req.body.gender;
    email = req.body.email;
    dateofbirth = req.body.dateofbirth;
    address = req.body.address;
    
});

module.exports = router;
