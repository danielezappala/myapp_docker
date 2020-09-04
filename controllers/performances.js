const Performance = require('../models/performance');
console.log('controller performances')
exports.bulkCreatePerformances = () => {
    Performance.bulkCreate(
        [
            { productionId: 1, turnId: 1, date: "10/13/2020" }
        ]
    ).then(performances=>{
        console.log(performances.length + ' performances created')
        return performances
    })
    .catch(err=>{
        console.log(err)
    })  
}

exports.getPerformances = (req,res,next) =>{
    Performances.findAll()
    .then(performances =>{
        res.render('performances_list', {
            performances: performances,
            title: 'Elenco produzioni'
          });
    })
}