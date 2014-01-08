App.Router.map(function() {
  this.resource('projects', { path: '/' });
  this.route('project', { path: '/projects/:project_id' });
  this.route('login');
});
