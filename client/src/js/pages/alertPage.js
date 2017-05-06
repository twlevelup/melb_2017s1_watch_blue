const Page = require('watch_framework').Page;
const template = require('../../templates/pages/alert.hbs');
const storage = require('../../storage');

const alertPage = Page.extend({
  id: 'alerts',
  template,
  buttonEvents: {
    top: 'homePage',
  },

  homePage() {
    window.App.navigate('');
  },

  render() {
    console.log(storage.dummyData.jobs);
    this.$el.html(this.template(storage.dummyData));
    return this;
  },
});


module.exports = alertPage;
