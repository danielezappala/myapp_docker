const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('testSequelize','root','Scenario_2020',{
    dialect:'mysql', 
    host: process.env.HOST,
    port:'3306'
});
module.exports = sequelize;