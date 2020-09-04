
const Season = require('../models/season');
const Program = require('../models/program');
const { bulkCreatePrograms } = require('./programs');
console.log('controller seasons')
Season.hasMany(Program)
Program.belongsTo(Season)

 exports.getSeasons =  (req,res,next) =>{
    Season.findAll(
        {include: Program}
    )  
    // usando asyn/await salvo la query in una variabileù
    // e la salvo in un oggetto per passarla
    // insieme al risultato della promise precedente

    .then(async seasons =>{
        
        let programs = await Program.findAll()
        result = {
            seasons: seasons, 
            programs: programs
        }
        return result
    })
    .then(result =>{
        console.log(JSON.stringify(result));
        res.render('seasons_list', {
            seasons: result.seasons,
            title: 'Elenco stagioni',
            programs: result.programs 
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
