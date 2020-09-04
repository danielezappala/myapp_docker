
function initData() {

    console.log('initializing data');
    const Season = require('../models/season');
    const Program = require('../models/program');
    const Contact = require('../models/contact');
    const ContactDetail = require('../models/contact_detail');
    const Membership = require('../models/membership');
    const MembershipPlan = require('../models/membership_plan');
    const Turn = require('../models/turn');


    (async () => {
        //await sequelize.sync({ force: 'true' })
        //await sequelize.sync()
        
        const seasonController = require('../controllers/seasons')
        const membershipPlansController = require('../controllers/memberships')
        const programController = require('../controllers/programs')
        const turnController = require('../controllers/turns')
        const contactController = require('../controllers/contacts')
        const productionController = require('../controllers/productions')
        const performanceController = require('../controllers/performances')
        const siteController = require('../controllers/site')

        const seasons = await  siteController.getInit();
        const contacts = await contactController.bulkCreateContacts();
        //const programs = await programController.bulkCreatePrograms(seasons);
        const membershipPlans = await membershipPlansController.bulkCreateMembershipPlans();
        const productions = await productionController.bulkCreateProductions();
        const turns = await turnController.bulkCreateTurns();
        const performances = await performanceController.bulkCreatePerformances();
        const memberships = await membershipPlansController.bulkCreateMembership();
    })()
}

module.exports = initData
