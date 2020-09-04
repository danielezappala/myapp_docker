var express = require('express');
var router = express.Router();
var appRoot = process.env.PWD;

// set controller

const programController = require(appRoot+'/controllers/programs');
const routeProgramDetail = require(appRoot+'/routes/programs/programDetail');

/* GET contacts page. */

router.get('/:programId', programController.getProgramById);
router.get('/',programController.getPrograms);


module.exports = router;
