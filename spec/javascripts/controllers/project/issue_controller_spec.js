describe('App.ProjectIssueController', function() {
  var controller, mockIssue;

  beforeEach(function() {
    var container = App.__container__;
    controller = container.lookup('controller:project.issue');

    mockIssue = {
      save: function() {},
      project: Ember.Object.create(),
    };

    console.log(mockIssue.save);
    spyOn(mockIssue, 'save');
    controller.set('content', mockIssue);
  });

  describe('#save', function() {
    it('saves the issue', function() {
      controller.send('save');
      expect(mockIssue.save).toHaveBeenCalled();
    });
  });

  describe('#close', function() {

    beforeEach(function() {
      spyOn(controller, 'transitionToRoute');
    });

    it('transitions the route to projects', function() {
      controller.send('close');
      expect(controller.transitionToRoute).toHaveBeenCalledWith(
        'project',
        mockIssue.project
      );
    });

  });

});
