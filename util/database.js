const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('testSequelize','root','Scenario_2020',{
    dialect:'mysql', 
    host: 'mysql',
    port:'3306'
});
module.exports = sequelize;