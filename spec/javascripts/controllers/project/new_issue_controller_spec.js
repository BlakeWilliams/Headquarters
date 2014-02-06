describe('App.ProjectNewIssueController', function() {
  var issue, controller;

  beforeEach(function() {
    var container = App.__container__;
    var projectController = container.lookup('controller:project');

    controller = container.lookup('controller:project_new_issue');
    store = {
      createRecord: function() {},
    }
    issue = jasmine.createSpyObj('record', ['one', 'save']);
    spyOn(store, 'createRecord').and.returnValue(issue);
    controller.set('store', store);
  });

  describe('#save', function() {
    it('saves the issue', function() {
      controller.send('save');
      expect(issue.save).toHaveBeenCalled();
    });
  });
});
