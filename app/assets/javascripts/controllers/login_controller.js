App.LoginController = Ember.Controller.extend({
  email: null,
  password: null,

  actions: {
    login: function() {
      var session = $.ajax({
        url: App.get('apiPath') + '/sessions',
        type: 'POST',
        data: {
          email: this.get('email'),
          password: this.get('password'),
        }
      });

      session.then(function(data) {
        var token = data.token;
        App.setToken(token);
      });
    }
  },
});
