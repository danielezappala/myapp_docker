console.log('defining model membershipPlan')


const Sequelize = require('sequelize')
const sequelize = require('../util/database');
const Program = require('./program');
const Membership = require('./membership');


const MembershipPlan = sequelize.define('membershipPlans',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: 
    {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'unique_performance',
    }
    ,
    turnId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: 'unique_performance',
    }
},
    {
        uniqueKeys: {
            unique_performance: {
                fields: ['type', 'turnId']
            }
        }
    }     
);

module.exports = MembershipPlan;
