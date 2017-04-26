const Page = require('watch_framework').Page;
const storage = require('../../storage');
const template = require('../../templates/pages/skillPage.hbs');

const jobFilterPage = Page.extend({
  id: 'jobFilterPage',

  template,

  initialize() {
    this.jobsCollection = storage.dummyData.jobs;
  },

  filterBySkill(skill) {
    return this.jobsCollection.filter(job => (job.Skill === skill));
  },

  render() {
    this.$el.html(this.template());
    return this;
  },
});

module.exports = jobFilterPage;
