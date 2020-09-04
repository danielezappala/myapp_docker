var express = require('express');
var router = express.Router();
var appRoot = process.env.PWD;

// set controller

const programController = require(appRoot+'/controllers/programs');
const routeProgramDetail = require(appRoot+'/routes/programs/programDetail');
const routeProgramUpdate = require(appRoot+'/routes/programs/programUpdate');

/* GET contacts page. */
router.get('/',programController.getPrograms);
router.get('/new', programController.newProgram);
router.post('/add', programController.postAddProgram);
router.use('/detail', routeProgramDetail);
router.use('/update', routeProgramUpdate);



module.exports = router;
