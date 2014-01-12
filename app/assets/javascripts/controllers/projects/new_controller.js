App.ProjectsNewController = Ember.Controller.extend({
  name: '',
  description: '',

  actions: {
    save: function() {
      var properties = this.getProperties('name', 'description');
      var project = this.get('store').createRecord('project', properties);

      project.one('didCreate', this, function() {
        this.send('cancel');
      });

      project.save();
    },

    cancel: function() {
      this.setProperties({
        name: '',
        description: '',
      });

      this.transitionToRoute('projects');
    },
  },
});
