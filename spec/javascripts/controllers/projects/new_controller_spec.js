describe('App.ProjectsNewController', function() {
  var record, controller, store;
  var controller;
  var store;

  beforeEach(function() {
    store = App.__container__.lookup('store:main');
    controller = App.__container__.lookup('controller:projects.new');

    record = jasmine.createSpyObj('store', ['one', 'save']);
    spyOn(store, 'createRecord').and.returnValue(record);
  });

  describe('#save', function() {
    it('saves the project', function() {
      controller.send('save');

      expect(record.save).toHaveBeenCalled();
      expect(record.one).toHaveBeenCalled();
    });
  });

  describe('#cancel', function() {
    beforeEach(function() {
      spyOn(controller, 'transitionToRoute');
    });

    it('resets project properties', function() {
      controller.setProperties({
        name: 'test',
        description: 'test'
      });

      controller.send('cancel');
      expect(controller.get('name')).toBe('');
      expect(controller.get('description')).toBe('');
    });

    it('transitions to projects', function() {
      controller.send('cancel');
      expect(controller.transitionToRoute).toHaveBeenCalledWith('projects');
    });
  });

});
