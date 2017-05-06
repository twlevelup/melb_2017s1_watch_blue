const Page = require('watch_framework').Page;
const storage = require('../../storage');
const template = require('../../templates/pages/skillPage.hbs');
const Menu = require('watch_framework').Menu;

const jobFilterPage = Page.extend({
  id: 'jobFilterPage',

  buttonEvents: {
    face: 'jobList',
    left: 'back'
  },

  jobFilterPage() {
    window.App.navigate('jobList');
  },

  template,

  initialize() {
    this.jobsCollection = storage.dummyData.jobs;
  },

  filterBySkill(skill) {
    return this.jobsCollection.filter(job => (job.Skill === skill));
  },

  render() {
    const filterBySkill = this.filterBySkill('Barista');
    console.log(filterBySkill);
    this.$el.html(this.template({ data : filterBySkill }));
    return this;
  },
});

module.exports = jobFilterPage;
