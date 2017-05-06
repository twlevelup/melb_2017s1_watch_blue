const JobFilterPage = require('../../src/js/pages/jobFilterPage');
const eventHub = require('watch_framework').EventHub;

let page;

describe('The Job Filter Page', () => {
  beforeEach(() => {
    page = new JobFilterPage();
  });

  describe('job data', () => {
    it('should have a job collection', () => {
      expect(page.jobsCollection).toBeDefined();
    });
  });

  describe('button event handlers', () => {
    describe('face', () => {
      it('should take the user to the jobList page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('jobFilterPage');
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
});
