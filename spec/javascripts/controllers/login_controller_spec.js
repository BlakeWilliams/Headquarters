describe('App.LoginController', function() {
  var controller, route, response, failResponse, expectedToken;

  beforeEach(function() {
    expectedToken = 'testtoken';
    controller = App.LoginController.create();
    route = App.LoginRoute.create();
    controller.set('target', route);

    Ember.run(function() {
      var model = App.LoginUser.create();
      controller.set('model', model);
      response =  {
        then: function(cb) {
          cb.call(this, {token: expectedToken});
        },
        fail: $.noop
      };

      failResponse =  {
        then: $.noop,
        fail: function(cb) {
          cb.call(this, null, 'error', 'Unauthorized')
        }
      };
    });
  });

  afterEach(function() {
    controller = null;
    route = null;
    response = null;
  });

  it('sets app token on login', function() {
    spyOn(route, 'transitionTo');
    spyOn($, 'ajax').and.returnValue(response);

    controller.send('submit');

    expect(App.get('token')).toBe(expectedToken);
  });

  it('retries if previous transition', function() {
    var callbacks = controller.get('callbacks');
    var previousTransition = {retry: $.noop};
    spyOn(previousTransition, 'retry');

    controller.set('previousTransition', previousTransition);

    callbacks.success.call(controller, {token: 'doesnt_matter'});
    expect(previousTransition.retry).toHaveBeenCalled();
  });

  it('login redirect to normal main page when no previous transition', function() {
    var callbacks = controller.get('callbacks');
    controller.set('previousTransition', undefined);
    var router = controller.get('target');
    spyOn(router, 'transitionTo');

    callbacks.success.call(controller, {token: 'doesnt_matter'});

    expect(router.transitionTo).toHaveBeenCalledWith('projects');
  });

  it('calls success helper on valid login', function() {
    var callbacks = controller.get('callbacks');
    spyOn(callbacks, "success");

    spyOn($, 'ajax').and.returnValue(response);

    controller.send('submit');

    expect(callbacks.success).toHaveBeenCalled();
  });

  it('redirects on login with valid login', function() {
    var success = controller.get('callbacks').success;
    var routerTransitionToSpy = spyOn(route, 'transitionTo');
    var setTokenSpy = spyOn(App, 'setToken');
    success.call(controller, {token: expectedToken});

    expect(routerTransitionToSpy).toHaveBeenCalled();
    expect(setTokenSpy).toHaveBeenCalledWith(expectedToken);
  });

  it('calls fail helper on login with invalid login', function() {
    var callbacks = controller.get('callbacks');
    spyOn(callbacks, "fail");

    spyOn($, 'ajax').and.returnValue(failResponse);

    controller.send('submit');

    expect(callbacks.fail).toHaveBeenCalled();
  });

});
