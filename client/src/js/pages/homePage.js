const Page = require('watch_framework').Page;

const template = require('../../templates/pages/home.hbs');
const $ = require('jquery');
const storage = require('../../storage');

const homePage = Page.extend({

  id: 'home',
  initialize() {
    this.jobsCollection = storage.dummyData.jobs;
  },
  template,

  buttonEvents: {
    top: 'scrollUp',
    bottom: 'goToAlertsPage',
    right: 'goToEventsList',
  },

  jobFilterPage() {
    window.App.navigate('jobFilterPage');
  },

  goToContacts() {
    window.App.navigate('contacts');
  },

  goToEventsList() {
    window.App.navigate('eventsList');
  },

  scrollUp() {
    $('#watch-face').animate({ scrollTop: '-=70px' });
  },

  goToAlertsPage() {
    window.App.navigate('alerts');
  },


  countUnreadAlerts() {
    return this.jobsCollection
      .filter(job => !job.SeenByUser)
        .length;
  },

  render() {
    const alertData = {
      count: this.countUnreadAlerts(),
    };
    this.$el.html(this.template(alertData));
    return this;
  },

});

module.exports = homePage;
