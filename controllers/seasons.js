
const Season = require('../models/season');
const Program = require('../models/program');
const {bulkCreatePrograms} = require('./programs');
console.log('controller seasons')
Season.hasMany(Program)
Program.belongsTo(Season)

let fetchedSeasons;

 exports.getSeasons =  (req,res,next) =>{
    
    Season.findAll(
        {include: Program}
    )  
        .then( seasons =>{  
            fetchedSeasons = seasons
        Program.findAll()
    })
    .then(programs =>{
        console.log(JSON.stringify(programs));
        res.render('seasons_list', {
            seasons: fetchedSeasons,
            title: 'Elenco stagioni',
            programs: programs
          });
    })
}

exports.newSeason = (req, res, next) => {
    Season.findAll()
    .then(seasons =>{
         console.log('controller newSeason')
        res.render('seasons_new', {
            title: "Aggiungi stagione"
        })
    })
    .catch(err => console.log(err));
}

exports.postAddSeason = (req, res, next) => {

    const title = req.body.title;
   
    console.log('postAddSeasons ' + title );
  
    Season.create(
      {
        title: title
      })
      .then(season => {
        console.log('New seasons created ' + season.title);
        res.redirect('/seasons');
      })
      .catch(err => console.log(err));
  };
