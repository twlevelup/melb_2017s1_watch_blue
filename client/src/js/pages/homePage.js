const Page = require('watch_framework').Page;

const template = require('../../templates/pages/home.hbs');
const $ = require('jquery');
const storage = require('../../storage');

const homePage = Page.extend({

  id: 'home',
  data: storage.dummmyData,
  alertCount: 5,
  template,

  buttonEvents: {
    right: 'jobFilterPage',
    top: 'scrollUp',
    bottom: 'goToAlertsPage',
  },

  jobFilterPage() {
    window.App.navigate('jobFilterPage');
  },

  goToContacts() {
    window.App.navigate('contacts');
  },

  scrollUp() {
    $('#watch-face').animate({ scrollTop: '-=70px' });
  },

  goToAlertsPage() {
    window.App.navigate('alerts');
  },


  countUnreadAlerts() {
    return this.data.jobs
      .filter(job => !job.SeenByUser)
      .length;
  },

  render() {
    this.$el.html(this.template());
    return this;
  },

});

module.exports = homePage;
