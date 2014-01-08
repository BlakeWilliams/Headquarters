describe('App.LoginRoute', function() {
  var controller;

  beforeEach(function() {
    container = App.__container__;
    controller = container.lookup('controller:application');
    route = container.lookup('route:login');
  });

  it("sets loginLayout on applicationController on activate", function() {
    route.activate(); 
    expect(controller.get('loginLayout')).toBe(true);
  });

  it("unsets loginLayout on applicationController on deactivate", function() {
    route.activate(); 
    route.deactivate();
    expect(controller.get('loginLayout')).toBe(false);
  });
});
