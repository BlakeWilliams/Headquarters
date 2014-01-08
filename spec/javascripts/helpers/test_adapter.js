Ember.Test.JasmineAdapter = Ember.Test.Adapter.extend({
  asyncStart: function(cb) {
  },

  asyncEnd: function() {
  },

  exception: function(error) {
  }
});

//Ember.Test.adapter = Ember.Test.JasmineAdapter.create();
Ember.Test.adapter = Ember.Test.Adapter.create();
