App.LoginRoute = Ember.Route.extend({
  activate: function() {
    this.controllerFor('application').set('loginLayout', true);
  },

  deactivate: function() {
    this.controllerFor('application').set('loginLayout', false);
  },

  model: function() {
    return App.LoginUser.create();
  }

});
