App.ProjectRoute = App.Authenticated.extend({
  model: function(params) {
    return this.store.find('project', params.project_id);
  }
});
