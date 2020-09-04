console.log('defining model program')

const Sequelize = require('sequelize')
const sequelize = require('../util/database');

const Program  = sequelize.define('programs',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: 
    {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = Program;
