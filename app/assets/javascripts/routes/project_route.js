App.ProjectRoute = Ember.Route.extend({
  model: function(params) {
    if (App.isLoggedIn(this)) {
      return this.store.find('project', params.project_id);
    }
  }
});

