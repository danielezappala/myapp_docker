const Sequelize = require('sequelize')
    const sequelize = require('../util/database');
    //const moment = require('moment');
    
    const Contact = require('../models/contact');
    const ContactDetail = require('../models/contact_detail');

    const MembershipPlan = require('../models/membership_plan');
    const Membership = require('../models/membership');
    
    const Season = require('../models/season');
    const Program = require('../models/program');
    const Turn = require('../models/turn');
    const Performance = require('../models/performance');
    const Production = require('../models/production');
    
    Program.hasMany(Turn);
    Turn.belongsTo(Program);

    Season.hasMany(Program);
    Program.belongsTo(Season);

    Turn.belongsToMany(Production, { through: Performance });
    Production.belongsToMany(Turn, { through: Performance });

    Turn.hasMany(Performance)
    Performance.belongsTo(Turn);

    Production.hasMany(Performance)
    Performance.belongsTo(Production);
