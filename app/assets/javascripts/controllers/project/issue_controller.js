App.ProjectIssueController = Ember.ObjectController.extend({
  actions: {
    toggleClosed: function() {
      var closed = this.get('closed');
      this.set('closed', !closed);

      this.send('save');
    },

    save: function() {
      this.get('content').save();
    },

    close: function() {
      this.transitionToRoute('project', this.get('project'));
    },
  }
});
