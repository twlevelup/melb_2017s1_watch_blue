const HomePage = require('../../src/js/pages/homePage');
const App = require('../../src/js/app');
const eventHub = require('watch_framework').EventHub;

let page;

window.App = App;

describe('The Home Page', () => {
  beforeEach(() => {
    page = new HomePage();
  });

  describe('button event handlers', () => {
    describe('right', () => {
      it('should take the user to the jobFilter page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('jobFilterPage');
      });
    });

    describe('top', () => {
      it('should scroll the watch face up', () => {
        spyOn(page, 'scrollUp');
        page.configureButtons();
        eventHub.trigger('top');
        expect(page.scrollUp).toHaveBeenCalled();
      });
    });
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
      expect(page.$el).toContainText('Hello, World!');
    });

    it('returns the view object', () => {
      expect(page.render()).toEqual(page);
    });
  });
  describe('alertsPage', () => {
    it('Should take the user to the alerts page', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('bottom');
      expect(window.App.navigate).toHaveBeenCalledWith('alerts');
    });
  });
});
