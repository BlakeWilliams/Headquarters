App.ProjectsRoute = App.AuthenticationRoute.extend({
  model: function() {
    return this.store.findAll('project');
  }
});
