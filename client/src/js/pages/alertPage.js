const Page = require('watch_framework').Page;

const alertPage = Page.extend({
  id: 'alerts',
  render() {
    this.$el.html('This is a demo');
    return this;
  },
});


module.exports = alertPage;
