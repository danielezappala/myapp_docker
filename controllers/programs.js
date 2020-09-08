const Program = require('../models/program');
const Season = require('../models/season');
const Turn = require('../models/turn');
console.log('controller programs')

Program.hasMany(Turn);
Turn.belongsTo(Program);

exports.bulkCreatePrograms = () => {
    console.log('creating programs in seasons')
    Program.bulkCreate(
        [
            { name: 'ECO', seasonId: 1 },
            { name: 'UMANITA', seasonId: 1 }
        ]
    ).then(programs=>{
        console.log(programs.length + ' programs created')
        return programs
    })
    .catch(err=>{
        console.log(err)
    })
  
}

exports.getPrograms = (req,res,next) =>{
    Program.findAll()
    .then(programs =>{
        res.render('programs_list', {
            programs: programs,
            title: 'Elenco programmi'
          });
    })
}

exports.newProgram = (req, res, next) => {
    Season.findAll()
    .then(seasons =>{
        console.log(seasons.length + " seasons included")
        console.log('controller newProgram')
        res.render('programs_new', {
            title: "Aggiungi programma",
            seasons: seasons
        })
    })
    .catch(err => console.log(err));
}

exports.postAddProgram = (req, res, next) => {

    const name = req.body.name;
    const seasonId = req.body.seasonId;
    const pageDest = req.body.pageDest

    console.log('postAddProgram ' + name );
  
    Program.create(
      {
        name: name,
        seasonId: seasonId
  
      })
      .then(program => {
        console.log('New program created ' + program.name);
        res.redirect('/' + pageDest);
      })
      .catch(err => console.log(err));
  }

  exports.getProgramById = (req, res, next) => {
    console.log('controller getProgram');
    //console.log('session ' + req.session)
    //console.log('request ' + JSON.stringify(req.body));
    const programId = req.params.programId;
    const pageDest = req.params.pageDest;
    console.log('getProgram ' + programId );
    return Program.findOne({
        where: {id: programId},
            include: Turn
        })
        .then(async program => { 
            
                return result = {
                    program: program,
                    turns: program.turns
                }
        })
    .then(result => {
        console.log('found ' + result.program.name);
        res.render('program_detail', 
        {
            title: 'Dettaglio cartellone',
            program: result.program,
            turns: result.turns
        });
      })
      .catch(err => console.log(err));
  };

  exports.postProgramUpdate = (req,res,nex) => {
    console.log('postProgramUpdate ')
    const id = req.body.programId;
    const name = req.body.name;
    console.log('programId ' + id)
    console.log('program name ' + name)
    Program.update(
        { name: name },
        { where: { id: id} }
    )
    .then(() => {
        res.redirect('/seasons')
    })
    .catch(err => {
        console.log(err)
    })
  }