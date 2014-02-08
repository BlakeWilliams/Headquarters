describe('App.AuthenticatedRoute', function() {
  var route;
  
  beforeEach(function() {
    route = App.AuthenticatedRoute.extend().create();
  });

  it("routes extending from AuthenticatedRoute have a beforeModel hook", function() {
    expect(route.beforeModel).toBeDefined();
  });


  describe('redirectToLogin', function() {
    var controller;

    beforeEach(function() {
      controller = jasmine.createSpyObj('loginController', ['set'])
      spyOn(route, 'controllerFor').and.returnValue(controller);
    });

    it("transitions to login", function() {
      spyOn(route, 'transitionTo');

      route.redirectToLogin();
      expect(route.transitionTo).toHaveBeenCalled();
    });

    it('sets previous transition on login controller', function() {
      spyOn(route, 'transitionTo');

      route.redirectToLogin({});
      expect(controller.set).toHaveBeenCalledWith('previousTransition', {})
    });
  });
});
