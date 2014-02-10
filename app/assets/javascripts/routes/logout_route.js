App.LogoutRoute = Ember.Route.extend({
  beforeModel: function(transition, queryParams) {
    App.revokeToken();
    this.transitionTo('login');
  }
});
