var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var ContactForm = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    visible: true
  }
});

var ContactFormCollection = Backbone.Collection.extend({
  model: ContactForm,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/coworkers'
});

module.exports = {
  ContactForm: ContactForm,
  ContactFormCollection: ContactFormCollection
}
