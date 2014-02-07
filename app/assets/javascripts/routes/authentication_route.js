App.AuthenticationRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    if (!App.isAuthenticated()) {
      this.redirectToLogin(transition);
    }
  },

  redirectToLogin: function(transition) {
    var loginController = this.controllerFor('login');
    loginController.set('previousTransition', transition);
    this.transitionTo('login');
  },

  actions: {
    error: function(reason, transition) {
      this.redirectToLogin(transition);
    }
  }
});


