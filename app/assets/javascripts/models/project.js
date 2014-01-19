App.Project = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),

  issues: DS.hasMany('issue', { async: true }),
})
