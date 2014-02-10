describe('App.ProjectIssueController', function() {
  var controller, mockIssue;

  beforeEach(function() {
    var container = App.__container__;
    controller = container.lookup('controller:project.issue');

    mockIssue = Ember.Object.create({
      save: function() {},
      project: Ember.Object.create(),
    });

    spyOn(mockIssue, 'save');
    controller.set('content', mockIssue);
  });

  describe('#toggleClosed', function() {
    it('triggers save', function() {
      spyOn(controller._actions, 'save');

      controller.send('toggleClosed');

      expect(controller._actions.save).toHaveBeenCalled();
    });

    describe('when closed is false', function() {
      it('sets closed to true', function() {
        controller.set('closed', false);

        controller.send('toggleClosed');

        expect(mockIssue.get('closed')).toBe(true);
      });
    });

    describe('when closed is true', function() {
      it('sets closed to true', function() {
        controller.set('closed', true);
        controller.send('toggleClosed');

        expect(mockIssue.get('closed')).toBe(false);
      });
    });
  }),

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
