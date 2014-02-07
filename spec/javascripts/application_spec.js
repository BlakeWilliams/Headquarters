describe('App', function() {
  describe('#setToken', function() {
    it("sets token on app and storage", function() {
      var token = "testtoken";
      App.setToken(token);
      expect(token).toBe(App.get('storage').token);
      expect(token).toBe(App.get('token'));
    });
  });

  describe('authentication check', function() {
    var route;
    beforeEach(function() {
      route = App.ProjectRoute.create();
      route.store = {find: $.noop};
      spyOn(route, 'transitionTo');
      spyOn(route.store, 'find');
    });
    afterEach(function() {
      route = null;
    });

    it("routes with auth guard redirects back to login if not authenticated", function() {
      spyOn(App, 'isAuthenticated').and.returnValue(false);
      route.model();
      expect(route.transitionTo).toHaveBeenCalled();
    });

    it("route with auth guard does NOT redirect if IS authenticated", function() {
      spyOn(App, 'isAuthenticated').and.returnValue(true);
      route.model({project_id: 123});
      expect(route.store.find).toHaveBeenCalled();
    });
  });

});
