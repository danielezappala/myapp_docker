var express = require('express');
var router = express.Router();
var appRoot = process.env.PWD;

// environment variables
process.env.NODE_ENV = 'development';

// uncomment below line to test this code against staging environment
// process.env.NODE_ENV = 'staging';

// config variables
//const config = require('../config/config.js');

var routeContacts = require('../routes/contacts/contactsList')
var routeMembershipPlans = require('../routes/membershipPlans/membershipPlansList')
var routePrograms = require('./programs/programsList')
var routeTurns = require('./turns/turnsList')
var routeSeasons = require('./seasons/seasonsList')

var siteController = require('../controllers/site')

var programController = require('../controllers/programs')

/* GET home page. */
router.get('/home', siteController.getHome);
/* GET init page. */
router.get('/init', siteController.getInit);
/* GET contacts page. */
router.use('/contacts', routeContacts);
/* GET membership_plans page. */
router.use('/membershipPlans', routeMembershipPlans);
/* GET membership_plans page. */
router.use('/seasons', routeSeasons);

router.use('/programs', routePrograms);

router.use('/turns', routeTurns);

// reindirizza tutti gli endpoint inesistenti
router.get('/', function(req, res, next) {
    res.redirect('home')
  });

module.exports = router;
