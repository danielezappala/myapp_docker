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

exports.getNewTurn = (req, res, next) => {
    console.log('controller newTurn')
    console.log('programId '+req.params.programId)
        res.render('turns_new', {
            title: "Aggiungi turno",
            programId: req.params.programId,
            sourcePage: req.originalUrl
        })
}
exports.postAddTurn = (req, res, next) => {
    console.log('source page '+req.body.sourcePage)
    Turn.create({
        name: req.body.name,
        programId: req.body.programId
        },   
        {include: Program}
    )
    .then(turn => {
        console.log('new turn  ' + turn.name)
        console.log('programId ' + turn.programId)
        res.redirect('/programs/detail/'+turn.programId)
    })
    .catch(err => {
        console.log('errore ' + err)
        const show_modal = !!req.body.modal; // Cast to boolean
        
        res.render('modal',{
            message: 'creazione del record',
            submessage: 'Un turno con nome '+ req.body.name.toUpperCase() + ' è già presente per questo cartellone ',
            error: err,
            destPage: req.body.sourcePage
        })
    });
}
exports.OLDpostAddTurn = (req, res, next) => {

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