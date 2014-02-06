App.ProjectIssueController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      this.get('content').save();
    },

    close: function() {
      this.transitionToRoute('project', this.get('project'));
    },
  }
});
