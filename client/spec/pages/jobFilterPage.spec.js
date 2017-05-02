const JobFilterPage = require('../../src/js/pages/jobFilterPage');

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
