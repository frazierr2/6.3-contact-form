var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var formTemp = require('../../templates/form.hbs');
var contactlist = require('../../templates/contactlist.hbs');


//******** DIRECTION SECTION ABOVER USER FORM ******
var ContactInstructionsView = Backbone.View.extend({
  tagName: 'p',
  attributes: {
    id: 'instructions',
    'class': 'contact-instructions well text-center'
  },
  render: function() {
    // console.log(this.$el);
    this.$el.text('Please enter your information and press submit when done!')

    return this;
  }
});

//******* WHERE I AM TRYING TO ADD IN FIRST PART FOR DISPLAYING INPUTS******
var ContactListView = Backbone.View.extend({
  tagName: 'ul',
  attributes: {
    'class': 'contact-items list-group'
  },
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderContactItem);
  },
  render: function() {
    return this;
  },
  renderContactItem: function(data) {
    var contactItem = new ContactListItem({
      model: data
    });
    this.$el.append(contactItem.render().el);
  }
});

//***** SECOND HALF OF DISPLAYING INPUTS ******
var ContactListItem = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  template: contactlist,
  render: function() {
    var context = this.model.toJSON();
    var listTemp = this.template(context);

    this.$el.html(listTemp);

    return this;
  }
});

//**** WHERE I AM ADDING FORM INPUT FOR USERS******
var UserForm = Backbone.View.extend({
  tagName: 'form',
  attributes: {
    id: 'userForm'
  },
  template: formTemp,
  events: {
    'submit': 'addContact'
  },
  addContact: function(e) {
    e.preventDefault();

    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var email = $('#email').val();
    var phoneNumber = $('#phone-number').val();
    var age = $('#age').val();

    this.collection.create({
      first: firstName,
      last: lastName,
      email: email,
      phone: phoneNumber,
      age: age
    });

    $('#first-name').val('');
    $('#last-name').val('');
    $('#email').val('');
    $('#phone-number').val('');
    $('#age').val('');
  },
  render: function() {
    var renderedTemplate = this.template();
    this.$el.html(renderedTemplate);
    return this;
  }
});


// initialize: function() {
//   this.listenTo(this.model, 'submit', this.render);
// },



module.exports = {
  ContactInstructionsView: ContactInstructionsView,
  UserForm: UserForm,
  ContactListView: ContactListView,
  ContactListItem: ContactListItem
}
