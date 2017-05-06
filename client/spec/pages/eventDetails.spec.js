const Backbone = require('backbone');
const EventDetails = require('../../src/js/pages/eventDetails');
const storage = require('../../src/storage');
const eventHub = require('watch_framework').EventHub;

let page;

describe('The Event details page', () => {
  beforeEach(() => {
    page = new EventDetails();
    page.back = () => {};
  });

  describe('a new event details page', () => {
    it('should load the events data', () => {
      // FIXME this is crap, data should be passed in to the constructor for the page
      expect(page.data).toEqual(storage.skillsList);
    });
  });

  describe('getEventData', () => {
    let cid;

    beforeEach(() => {
      page.data = new Backbone.Collection({ foo: 'getEventData' });
      cid = page.data.last().cid;
    });

    it('should return the correct model from the eventsData collection', () => {
      page.options = { cid };
      expect(page.getEventData().toJSON()).toEqual({ foo: 'getEventData' });
    });
  });

  describe('button events', () => {
    beforeEach(() => {
      page.configureButtons();
    });

    describe('top', () => {
      it('should scroll the watch face up', () => {
        spyOn(page, 'scrollUp');
        page.configureButtons();
        eventHub.trigger('top');
        expect(page.scrollUp).toHaveBeenCalled();
      });
    });

    describe('bottom', () => {
      it('should scroll the watch face down', () => {
        spyOn(page, 'scrollDown');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(page.scrollDown).toHaveBeenCalled();
      });
    });

    describe('left', () => {
      it('should go back', () => {
        spyOn(page, 'back');
        page.configureButtons();
        eventHub.trigger('left');
        expect(page.back).toHaveBeenCalled();
      });
    });
  });

  describe('filterBySkill', () => {
    it('should have a job collection', () => {
      const expectedJobs = [
        { JobName: 'Chef', Skill: 'Hospitality', SeenByUser: true },
        { JobName: 'Bar tender', Skill: 'Hospitality', SeenByUser: false },
      ];

      expect(page.filterBySkill('Hospitality')).toEqual(expectedJobs);
    });
  });

  describe('rendering', () => {
    const eventData = new Backbone.Model({
      JobName: 'Job',
    });

    beforeEach(() => {
      spyOn(page, 'getEventData').and.returnValue(eventData);
    });

    it('should have the correct title', () => {
      page.render();
      expect(page.$el).toContainHtml('<th>Job Name</th>');
    });

    it('returns the view object', () => {
      expect(page.render()).toEqual(page);
    });
  });
});
