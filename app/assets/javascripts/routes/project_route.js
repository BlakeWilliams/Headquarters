App.ProjectRoute = App.AuthenticationRoute.extend({
  model: function(params) {
    return this.store.find('project', params.project_id);
  }
});
