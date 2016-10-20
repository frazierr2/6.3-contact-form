var $ = require('jquery');
var views = require('./views/contactviews');
var models = require('./models/contactmodels');


var contactCollection = new models.ContactFormCollection();


var directions = new views.ContactInstructionsView();
$('.form-instructions').append(directions.render().el);

var userForm = new views.UserForm({
  collection: contactCollection
});
$('.form-doc').append(userForm.render().el);

var listOfContacts = new views.ContactListView({
  collection: contactCollection
});
$('.contact-list').append(listOfContacts.render().el);




contactCollection.fetch();




// contactCollection.add([{
//   'first-name': 'Ryan',
//   'last-name': 'Frazier',
//   'email': 'rfrazier@lucaspos.com',
//   'phone-number': '864-555-1234',
//   'age': '31'
// }]);
