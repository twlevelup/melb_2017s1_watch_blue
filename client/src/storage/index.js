const Backbone = require('backbone');
const eventsData = require('./events.json');
const dummyData = require('./dummyData.json');

function Storage() {
  this.dummyData = dummyData;
  this.eventsData = new Backbone.Collection();
  this.eventsData.add(eventsData.events);
}

module.exports = new Storage();
