App.AppModalComponent = Ember.Component.extend({
  hideOverflow: function() {
    $('body').css({'overflow': 'hidden'});
  }.on('didInsertElement'),

  showOverflow: function() {
    $('body').css({'overflow': 'scroll'});
  }.on('willDestroyElement'),

  actions: {
    close: function() {
      this.sendAction('close');
    }
  }
});
