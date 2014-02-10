App.InlineEditComponent = Ember.Component.extend({
  editing: false,

  actions: {
    startEditing: function() {
      this.set('editing', true);
    },
  },

  textField: Ember.TextArea.extend({
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
      if (e.which == 13 && e.shiftKey == false) {
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
