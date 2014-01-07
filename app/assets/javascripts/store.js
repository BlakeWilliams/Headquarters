App.Store = DS.Store.extend({
  adapter: DS.ActiveModelAdapter.extend({
    headers: {
      'App-Token': App.get('token'),
    },

    namespace: App.get('apiPath'),
  }),
});

