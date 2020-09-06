console.log('defining model performance')


const Sequelize = require('sequelize')
const sequelize = require('../util/database');

const Performance  = sequelize.define('performances',{
    /*
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    */
   turnId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'turns', 
      key: 'id'
    },
    primaryKey: true 
  },
  productionId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'productions', 
      key: 'id'
    },
    primaryKey: true
  },
    date: 
    {
        type: Sequelize.DATEONLY,
        
    }
});

module.exports = Performance;
