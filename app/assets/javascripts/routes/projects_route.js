App.ProjectsRoute = Ember.Route.extend({
  model: function() {
    if (App.isLoggedIn(this)) {
      return this.store.findAll('project');
    }
  }
});
