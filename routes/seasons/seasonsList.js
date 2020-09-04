var express = require('express');
var router = express.Router();
var appRoot = process.env.PWD;

// set controller

const seasonController = require(appRoot+'/controllers/seasons')

/* GET contacts page. */
router.get('/new', seasonController.newSeason);
router.post('/add', seasonController.postAddSeason);
router.get('/',seasonController.getSeasons);


module.exports = router;
