App.Issue = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),

  project: DS.belongsTo('project'),
});
