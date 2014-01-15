describe('App.ProjectsNewController', function() {
  var controller;

  beforeEach(function() {
    controller = App.ProjectsNewController.create();
  });

  describe('#save', function() {
    var store, record;

    beforeEach(function() {
      store = {
        createRecord: function() {},
      }
      record = jasmine.createSpyObj('record', ['one', 'save']);
      spyOn(store, 'createRecord').and.returnValue(record);
      controller.set('store', store);
    });

    it('saves the project', function() {
      controller.send('save');

      expect(record.save).toHaveBeenCalled();
      expect(record.one).toHaveBeenCalled();
    });

    it('creates the record with the right properties', function() {
      properties = {
        name: 'test',
        description: 'test desc',
      }

      controller.setProperties(properties);
      controller.send('save');

      expect(store.createRecord).toHaveBeenCalledWith('project', properties);
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
