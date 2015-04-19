'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  PageView = require('../framework/page');

var ContactsCollection = require('../collections/contacts'),
  ContactView = require('./contact');

var ContactsView = PageView.extend({

  template: require('../../templates/views/contacts.hbs'),

  buttonEvents: {
    'a': 'navigate'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'createContactHTML', 'navigate');

    this.contactsCollection = new ContactsCollection();

    this.loadContacts();

  },

  loadContacts: function () {
    this.contactsCollection.push([
      {name: 'Adam', phoneNumber: '0431 111 111'},
      {name: 'Sam', phoneNumber: '0431 222 222'},
      {name: 'Shaheedha', phoneNumber: '0431 333 333'}
    ]);
  },

  navigate: function() {
    window.location.hash = '/';
  },

  render: function() {

    this.$el.html(this.template());

    var contactsHTML = document.createDocumentFragment();

    this.contactsCollection.each(function(contact) {
      $(contactsHTML).append(this.createContactHTML(contact));
    }, this);

    this.$el.append(contactsHTML);

    return this;

  },

  createContactHTML: function(contact) {
      var view = new ContactView({
        model: contact
      });
  		return view.render().el;
    }

  }
);

module.exports = ContactsView;