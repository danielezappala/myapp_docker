console.log('defining model production')


const Sequelize = require('sequelize')
const sequelize = require('../util/database');

const Production  = sequelize.define('productions',{
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

});

module.exports = Production;
