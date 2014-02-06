App.LoginController = Ember.Controller.extend({
  email: null,
  password: null,

  //Expose callbacks for better testability
  callbacks: {
    success: function(data) {
      var router = this.get('target'),
        token = data.token;
      App.setToken(token);
      router.transitionTo('projects');
    },
    fail: function(xhr, status, errThrown) {
      //No-op
      //TODO: Display error message(s). Holding off...need
      //feedback from Blake on how we prefer validation UIUX to work
      //console.log("Login failed...");
    },
  },
  actions: {
    login: function() {
      var self = this;
      var session = $.ajax({
        url: App.get('apiPath') + '/sessions',
        type: 'POST',
        data: {
          email: this.get('email'),
          password: this.get('password'),
        }
      });
      session.then(function(data) {
        self.callbacks.success.call(self, data);
      });
      session.fail(function(xhr, status, errThrown) {
        self.callbacks.fail.call(self, xhr, status, errThrown);
      });
    }
  },
});
