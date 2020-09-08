
console.log('defining model turn')

const Sequelize = require('sequelize')
const sequelize = require('../util/database');

const Turn = sequelize.define('turns',{
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
},
    {
        uniqueKeys: {
            unique_turn: {
                fields: ['name', 'programId']
            }
        }  
    }

);

module.exports = Turn;
