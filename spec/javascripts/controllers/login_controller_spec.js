describe('App.LoginController', function() {
  var server;
  var controller = App.__container__.lookup('controller:login');

  beforeEach(function() {
    server = sinon.fakeServer.create();
  });

  afterEach(function() {
    server.restore();
  });

  it('sets app token on login', function() {
    controller.send('login');

    server.requests[0].respond(200, {
      'Content-Type': 'application/json',
    }, JSON.stringify({

      token: 'testtoken',
    }));

    expect(App.get('token')).toBe('testtoken');
  });
});
