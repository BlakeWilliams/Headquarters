App.Issue = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  closed: DS.attr('boolean'),

  project: DS.belongsTo('project'),
});
