App.ProjectsNewView = Ember.View.extend({
  didInsertElement: function() {
    this.$().find('input').focus(); 
  },
});
