console.log('defining model contact')

const Sequelize = require('sequelize')
const sequelize = require('../util/database');

const Contact = sequelize.define('contacts',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    sex:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthday: Sequelize.DATE,
    birthPlace: Sequelize.STRING,
    nationality: Sequelize.STRING,
    residency: Sequelize.STRING,
    address: Sequelize.STRING,

    fullName:{
        type: Sequelize.VIRTUAL,
            get() {
                return `${this.firstName} ${this.lastName}`;
            },
            set(value) {
                throw new Error('Impossibile impostare il nome completo');
            }
    }
    
    /*,

    instanceMethods: {
        lowerCase: function(field) {
             this.set(field, this.get(field).toLowerCase())
             return this.save()
        }  
    }
    */

});

module.exports = Contact;
