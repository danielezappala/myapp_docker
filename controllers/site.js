const Season = require('../models/season');
const Program = require('../models/program');
const MembershipPlan = require('../models/membership_plan');
const Turn = require('../models/turn');
const Contact = require('../models/contact');
const ContactDetail = require('../models/contact_detail');
//const { ProxyAuthenticationRequired } = require('http-errors');
const Production = require('../models/production');
const Performance = require('../models/performance');
const Membership = require('../models/membership');

console.log('controller site')


exports.getHome = (req, res, next) => {
  res.render('index', {
    title: 'home',
  });
};

exports.getInit = (req, res, next) => {
  console.log('creating bulk data')

  return Contact.bulkCreate([
      {
        firstName: "Daniele",
        lastName: "Zappala",
        sex: "M",
        contactDetails: [{
          detail_type: "phone",
          detail: '123'
        }]
      },
      {
        firstName: "Elena",
        lastName: "Gorno",
        sex: "F",
        contactDetails: [{
          detail_type: "mobile",
          detail: '124'
        }]
      }
    ]
    ,{
      include: [ContactDetail]
    }
  )
  .then((contacts)=> {
      console.log(contacts.length + ' contacts created - details ' + contacts[0].contactDetails.detail)
       return Season.bulkCreate(
        [
          {
            title: "19/20"
          },
          {
            title: "20/21"
          }
        ]
      ) 
    })
    .then((seasons)=>{  
      const last = seasons.length-1
      Program.bulkCreate(
        [{
          name: "ECO",
          seasonId: seasons[last].id
        },
        {
          name: "UMANITA",
          seasonId: seasons[last-1].id
        },
        {
          name: "SEEDS",
          seasonId: seasons[last].id
        }
        ]
      )
    })
    .then(()=>{  
      Turn.bulkCreate(
        [
          {
            name: 'A',
            programId: 1
          },
          {
            name: 'B',
            programId: 1
          },
          {
            name: 'A',
            programId: 2
          },
          {
            name: 'B',
            programId: 2
          }
        ]
      )
    })
      .then(()=>{  
      MembershipPlan.bulkCreate(
        [
          {
            type: 'Intero',
            turnId: 1
          },
          {
            type: 'Ridotto',
            turnId: 1
          },
          {
            type: 'Intero',
            turnId: 2
          },
          {
            type: 'Ridotto',
            turnId: 2
          },
        ]
      )
      })
      .then(()=>{  
      Membership.bulkCreate(
        [
          {
            contactId: 1,
            turnId: 1,
            membershipPlanId: 1
          },
          {
            contactId: 2,
            turnId: 2,
            membershipPlanId: 2
          }
        ]
      )
      })
      .then(()=>{  
      Production.bulkCreate([
        { title: 'EVA' },
        { title: 'AGATA' }
      ])
    })
    .then(()=>{  
      Performance.bulkCreate(
        [
          {
            turnId: 1,
            productionId: 1,
            date: '2020-08-10'
          },
          {
            turnId: 2,
            productionId: 1,
            date: '2020-08-11',
          },
          {
            turnId: 1,
            productionId: 2,
            date: '2020-08-12'
          },
          {
            turnId: 2,
            productionId: 2,
            date: '2020-08-13'
          }
        ])
    })
    .then(()=>{
      console.log('this is ok')
      res.render('init',{title: 'Il database è stato popolato con i dati di prova'})
    })
    .catch(err =>{
      console.log('this is an error ' + err)
    })
 
}