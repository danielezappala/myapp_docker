console.log('controller contact')

const Contact = require('../models/contact');
const ContactDetail = require('../models/contact_detail');

Contact.hasMany(ContactDetail);
ContactDetail.belongsTo(Contact)

exports.bulkCreateContacts = ()=>{
    Contact.bulkCreate([
        {
            firstName: 'Daniele',
            lastName: 'Zappalà',
            sex: 'M',
            birthdate: "06/12/1970",
            contactDetails: [{
                detail: "123",
                detail_type: "phone"
            }]
        }],
        {
            include: [ContactDetail]
        }
    )
}

exports.getContacts = (req,res,next) =>{
    Contact.findAll(
        {include: ContactDetail}
    )
    .then(contacts =>{
         console.log('rendering contacts ' + contacts)
         res.render('contacts_list', {
            contacts: contacts,
            title: 'Elenco contatti'
          });
    })
}

exports.postAddContact = (req, res, next) => {

    const lastName = req.body.lastName;
    const firstName = req.body.firstName;
    const sex = req.body.sex;
    console.log('postAddContact ' + firstName);
  
    Contact.create(
      {
        firstName: firstName,
        lastName: lastName,
        sex: sex 
  
      })
      .then(contact => {
        console.log('New contact created ' + contact.lastName);
        console.log('Created contact');
        res.redirect('/contacts');
      })
      .catch(err => console.log(err));
  };

  exports.newContact = (req, res, next) => {
    console.log('controller newContact')
    res.render('contacts_new', {
      title: "Aggiungi contatto"
    })
    .catch(err => console.log(err));
  }