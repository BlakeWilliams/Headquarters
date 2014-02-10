App.Router.map(function() {
  this.resource('projects', { path: '/' }, function() {
    this.route('new');
  });

  this.resource('project', { path: '/projects/:project_id' }, function() {
    this.route('issue', { path: '/issues/:issue_id' })
  });
  this.route('login');
  this.route('logout');
});
