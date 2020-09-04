const Production = require('../models/production');
console.log('controller productions')
exports.bulkCreateProductions = () => {
    Production.bulkCreate(
        [
            { title: 'Eva' },
            { title: 'Corpo a corpo' }
        ]
    ).then(productions=>{
        console.log(productions.length + ' productions created')
        return productions
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getProductions = (req,res,next) =>{
    Productions.findAll()
    .then(productions =>{
        res.render('productions_list', {
            productions: productions,
            title: 'Elenco produzioni'
          });
    })
}