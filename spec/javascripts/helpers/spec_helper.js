document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');
document.write('<style>#ember-testing-container { display: none; }</style>');

App.rootElement = '#ember-testing';
App.setupForTesting();
App.injectTestHelpers();

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter.extend({
    headers: {},
  }),
});

beforeEach(function() {
  App.set('storage', {});
  App.set('token', undefined);
  Ember.run(function() {
    App.reset();
  });
});

