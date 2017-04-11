const Page = require('watch_framework').Page;
const storage = require('../../storage');
const jobFilterPage = Page.extend({
  id: 'jobFilterPage',

  initialize() {
    this.jobsCollection = storage.dummyData.jobs;
  },

  filterBySkill(skill) {

    return this.jobsCollection.filter((job)=>{

      return (job.Skill === skill);

    });
  }
});

module.exports = jobFilterPage;
