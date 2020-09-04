
console.log('defining model membership')

const Sequelize = require('sequelize')
const sequelize = require('../util/database');



const Membership = sequelize.define('memberships',{
    turnId: {type: Sequelize.INTEGER,
    references: {
      model: 'turns', 
      key: 'id'
    }
  },
    contactId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'contacts', 
          key: 'id',
        }
    }
  });

module.exports = Membership;
