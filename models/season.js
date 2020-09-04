
console.log('defining model season')

const Sequelize = require('sequelize')
const sequelize = require('../util/database');

const Season = sequelize.define('seasons',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: 
    {
        type: Sequelize.STRING,
        allowNull: false
    }
    /*
    period: 
    {
        type: Sequelize.RANGE,
        allowNull: false
    }
    */
});

module.exports = Season;
