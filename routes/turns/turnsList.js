var express = require('express');
var router = express.Router();
var appRoot = process.env.PWD;

// set controller

const turnController = require(appRoot+'/controllers/turns')

/* GET contacts page. */
router.get('/new/:programId', turnController.getNewTurn);
//router.post('/update/:turnId', turnController.postAddTurn);
router.post('/add', turnController.postAddTurn);
router.get('/',turnController.getTurns);


module.exports = router;