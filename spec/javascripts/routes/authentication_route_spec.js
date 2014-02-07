describe('App.AuthenticationRoute', function() {
  it("routes extending from AuthenticationRoute should have a beforeModel hook", function() {
    var projectRoute = App.ProjectRoute.create();
    var projectsRoute = App.ProjectsRoute.create();
    expect(projectRoute.beforeModel).toBeDefined();
    expect(projectsRoute.beforeModel).toBeDefined();
    var childRoute = App.AuthenticationRoute.extend({}).create();
    expect(childRoute.beforeModel).toBeDefined();
  });
});