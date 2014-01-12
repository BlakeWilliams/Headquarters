App.Router.map(function() {
  this.resource('projects', { path: '/' }, function() {
    this.route('new');
  });

  this.route('project', { path: '/projects/:project_id' });
  this.route('login');
});
