App.ProjectNewIssueController = Ember.Controller.extend({
  needs: ['project'],
  project: Ember.computed.alias('controllers.project'),
  name: '',

  actions: {
    save: function() {
      var project = this.get('project.content');
      var issue = this.get('store').createRecord('issue', {
        name: this.get('name'),
        project: project,
      });

      issue.one('didCreate', this, function() {
        this.set('name', '');
        project.get('issues').pushObject(issue);
      });

      issue.save();
    },
  }
});
