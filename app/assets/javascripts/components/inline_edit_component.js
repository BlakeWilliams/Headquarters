App.InlineEditComponent = Ember.Component.extend({
  editing: false,

  actions: {
    startEditing: function() {
      this.set('editing', true);
    },
  },

  textField: Ember.TextField.extend({
    initialValue: '',

    didInsertElement: function() {
      var value = this.get('value');
      var input = this.$();

      this.set('initialValue', value);

      input.val('');
      input.focus();
      input.val(value);
    },

    keyUp: function(e) {
      if (e.which == 13) {
        this.get('parentView').sendAction();
        this.focusOut();
      } else if (e.which == 27) {
        this.set('value', this.get('initialValue'));
        this.focusOut();
      }
    },

    focusOut: function() {
      this.set('parentView.editing', false);
    },
  }),
});
