console.log('defining model contact detail')

const Sequelize = require('sequelize')
const sequelize = require('../util/database');

const ContactDetail = sequelize.define('contactDetails',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    detail: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    detail_type: 
    {
        type: Sequelize.STRING,
        allowNull: false
    }
    

});

module.exports = ContactDetail;
