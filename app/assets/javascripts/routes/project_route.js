App.ProjectRoute = App.AuthenticatedRoute.extend({
  model: function(params) {
    return this.store.find('project', params.project_id);
  }
});
