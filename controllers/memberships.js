const Membership = require('../models/membership');
const MembershipPlan = require('../models/membership_plan');
const Program = require('../models/program')
const Contact = require('../models/contact');
const Turn = require('../models/turn');
console.log('controller membership')

    MembershipPlan.belongsToMany(Contact, { through: 'memberships' });
    Turn.belongsToMany(MembershipPlan, { through: 'memberships' });
    
    MembershipPlan.hasMany(Membership);
    Membership.belongsTo(MembershipPlan);

    Program.hasMany(Turn)
    Turn.belongsTo(Program)


Turn.hasMany(MembershipPlan);
MembershipPlan.belongsTo(Turn);

exports.bulkCreateMembershipPlans = () =>{
    MembershipPlan.bulkCreate([
        { type: "Intero", turnId: 1 },
        { type: "Ridotto", turnId: 2 }
    ]
    )
}

exports.bulkCreateMembership = () =>{
    Membership.bulkCreate(
        [{
            turnId: 1,
            contactId: 1,
            membershipPlanId: 1
        },
        {
            turnId: 2,
            contactId: 2,
            membershipPlanId: 2
        }
    ]
    )
        .then(memberships=>{
            console.log(memberships.length + ' memberships created')
            return memberships
        })
        .catch(err=>{
            console.log(err)
        })
}

exports.getMembershipPlans = (req,res,next) =>{
    MembershipPlan.findAll(
        {include: [
            { model: Turn,
            include: [ {model: Program}]
        }
        ]
    }
)
    .then(membership_plans =>{
        console.log('rendering membership plans ' + membership_plans)
        res.render('membership_plans_list', {
            membership_plans: membership_plans,
            title: 'Elenco piani abbonamento'
          });
    })
}

exports.newMembershipPlan = (req, res, next) => {
    Turn.findAll(
        {include: Program}
    )
    .then(turns =>{
        console.log(turns.length + " turns included")
        console.log('controller newMembershipPlan')
        res.render('memberships_new', {
            title: "Aggiungi piano abbonamento",
            turns: turns
        })
    })
    .catch(err => console.log(err));
}

exports.postAddMembershipPlan = (req, res, next) => {

    const type = req.body.type;
    const turnId = req.body.turnId;
    console.log('postAddMembershipPlans ' + type + '-' + turnId);
  
    MembershipPlan.create(
      {
        type: type,
        turnId: turnId
  
      })
      .then(membershipPlan => {
        console.log('New membershipPlan created ' + membershipPlan.type + ' - ' + membershipPlan.turnId);
        console.log('membershipPlan contact');
        res.redirect('/membershipPlans');
      })
      .catch(err => console.log(err));
  };