describe('App.LogoutRoute', function() {
  var route;

  beforeEach(function() {
    route = App.LogoutRoute.create();
    spyOn(App, 'revokeToken');
    spyOn(route, 'transitionTo');
  });

  //Simple "guard spec" to ensure functionality isn't inadertantly removed
  it("revokes token and redirects to login", function() {
    route.beforeModel();
    expect(route.transitionTo).toHaveBeenCalledWith('login');
    expect(App.revokeToken).toHaveBeenCalled();
  });
});
