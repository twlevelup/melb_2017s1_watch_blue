const DemoPage = require('../../src/js/pages/alertPage');

let page;

describe('The alert Page', () => {
  beforeEach(() => {
    page = new DemoPage();
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
      expect(page.$el).toContainText('You have been alerted');
      expect(page.$el).toContainHtml('<p>Here are your alerts</p>');
    });
  });
});
