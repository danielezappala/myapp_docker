var express = require('express');
var router = express.Router();
var appRoot = process.env.PWD;

// set controller

const contactController = require(appRoot+'/controllers/contacts')

/* GET contacts page. */
router.get('/new', contactController.newContact);
router.post('/add', contactController.postAddContact);
router.get('/',contactController.getContacts);


module.exports = router;
