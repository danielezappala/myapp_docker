const Turn = require('../models/turn');
const Program = require('../models/program');

Program.hasMany(Turn);
Turn.belongsTo(Program);

console.log('controller turns')
exports.bulkCreateTurns = () => {
    Turn.bulkCreate(
        [
            {name: "A", programId: 1},
            {name: "B", programId: 2},
        ]
    )
    .then(turns=>{
        console.log(turns.length + ' turns created')
        return turns
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getTurns = (req,res,next) =>{
    Turn.findAll(
        {include: Program}
    )
    .then(turns =>{

        console.log('rendering turns ' + JSON.stringify(turns))

        res.render('turns_list', {
            turns: turns,
            title: 'Elenco turni'

          });
    })
}

exports.newTurn = (req, res, next) => {
    Program.findAll()
    .then(programs =>{
        
        console.log('controller newTurn')
        res.render('turns_new', {
            title: "Aggiungi turno",
            programs: programs  
        })
    })
    .catch(err => console.log(err));
}

exports.postAddTurn = (req, res, next) => {

    const name = req.body.name;
    const programId = req.body.programId;

    console.log('postAddTurns ' + name + ' ' + programId);
    Turn.create(
        {
            name: name,
            programId: programId
        },
        {include: Program}

      )
      .then(turn => {
        console.log(turn)
        console.log('New turn created ' + turn.program + ' - ' + turn.name);
        res.redirect('/turns');
      })
      .catch(err => console.log(err));
  };