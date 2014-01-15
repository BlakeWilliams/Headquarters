describe('App.LoginRoute', function() {
  var controller, route;

  beforeEach(function() {
    controller = jasmine.createSpyObj('controller', ['set']);

    route = App.LoginRoute.create();
    spyOn(route, 'controllerFor').and.returnValue(controller);
  });

  it("calls controllerFor with application", function() {
    route.activate();
    expect(route.controllerFor).toHaveBeenCalledWith('application');
  });

  it("sets loginLayout on applicationController on activate", function() {
    route.activate(); 
    expect(controller.set).toHaveBeenCalledWith('loginLayout', true);
  });

  it("unsets loginLayout on applicationController on deactivate", function() {
    route.deactivate();
    expect(controller.set).toHaveBeenCalledWith('loginLayout', false);
  });
});
