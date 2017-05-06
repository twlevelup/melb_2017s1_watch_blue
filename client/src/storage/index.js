const Backbone = require('backbone');
const eventsData = require('./events.json');
const dummyData = require('./dummyData.json');

function Storage() {
  this.dummyData = dummyData;
  this.skillsList = new Backbone.Collection();
  const skills = dummyData.jobs.map(job => job.Skill);
  const uniqueSkills = skills.filter((skill, index) => skills.indexOf(skill) === index);
  const uniqueSkillsObjArr = uniqueSkills.map(skill => ({ Skill: skill }));
  this.skillsList.add(uniqueSkillsObjArr);

  this.eventsData = new Backbone.Collection();
  this.eventsData.add(eventsData.events);
}

module.exports = new Storage();
