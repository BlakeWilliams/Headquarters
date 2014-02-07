//= require_self
//= require ./store
//= require_tree ./mixins
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./helpers
//= require_tree ./components
//= require_tree ./templates
//= require ./router
//= require_tree ./routes

App = Ember.Application.create({
  apiPath: 'api/v1',

  setToken: function(token) {
    var adapter = this.__container__.lookup('store:main').adapterFor('application')

    adapter.headers['App-Token'] = token;
    this.set('token', token);
    this.get('storage').token = token;
  },

  //Revokes user's token setting both store and `App.token` null
  revokeToken: function() {
    App.get('storage').token = null;
    App.set('token', null);
  },

  isAuthenticated: function() {
    return !!App.get('storage').token;
  }
});

App.reopen({
  currentUser: function() {
    var store = this.__container__.lookup('store:main');
    return store.find('user', 'me');
  }.property()
});

App.set('storage', localStorage);
App.set('token', App.get('storage').token);
