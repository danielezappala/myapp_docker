var express = require('express');
var router = express.Router();
var appRoot = process.env.PWD;

// set controller

const membershipController = require(appRoot+'/controllers/memberships')

/* GET contacts page. */
router.get('/new', membershipController.newMembershipPlan);
router.post('/add', membershipController.postAddMembershipPlan);
router.get('/',membershipController.getMembershipPlans);


module.exports = router;
