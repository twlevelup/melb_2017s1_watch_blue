const Page = require('watch_framework').Page;
const template = require('../../templates/pages/alert.hbs');

const alertPage = Page.extend({
  id: 'alerts',
  template,
  render() {
    this.$el.html(this.template());
    return this;
  },
});


module.exports = alertPage;
