App.ProjectsRoute = App.AuthenticatedRoute.extend({
  model: function() {
    return this.store.findAll('project');
  }
});
