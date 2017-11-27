var express = require('express');
var router = express.Router();
var pg = require('pg');

var pool = require('../modules/pool');

router.get('/', function(req, res){
    pool.connect(function(errorConnectingToDatabse, db, donce){
        if (errorConnectingToDatabse) {
            console.log('there was an error connecting to database', errorConnectingToDatabse);
            res.sendStatus(500);
        } else {
            db.query('SELECT * FROM tasks;', function(errorMakingQuery, result){
                if(errorMakingQuery) {
                    console.log('there was an error making the Query', errorMakingQuery);
                    res.send(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
})


module.exports = router;