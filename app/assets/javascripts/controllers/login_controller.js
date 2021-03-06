App.LoginController = Ember.Controller.extend({
  callbacks: {
    success: function(data) {
      var router = this.get('target'),
        token = data.token;

      App.setToken(token);

      var previousTransition = this.get('previousTransition');
      if (previousTransition) {
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        router.transitionTo('projects');
      }
    },
    fail: function(xhr, status, errThrown) {
      //No-op
      //TODO: Display error message(s). Holding off...need
      //feedback from Blake on how we prefer validation UIUX to work
    }
  },
  actions: {
    submit: function() {
      var self = this;
      var session = $.ajax({
        url: App.get('apiPath') + '/sessions',
        type: 'POST',
        data: {
          email: self.get('content').email,
          password: self.get('content').password
        }
      });
      session.then(function(data) {
        self.callbacks.success.call(self, data);
      });
      session.fail(function(xhr, status, errThrown) {
        self.callbacks.fail.call(self, xhr, status, errThrown);
      });
    }
  }
});
