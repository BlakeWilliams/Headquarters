describe('App.LoginController', function() {
  var server, controller;
  
  beforeEach(function() {
    controller = App.LoginController.create();
  });

  it('sets app token on login', function() {
    var response =  {
      then: function(cb) {
        cb.call(this, { token: 'testtoken' });
      }
    }
    spyOn($, 'ajax').and.returnValue(response);

    controller.send('login');

    expect(App.get('token')).toBe('testtoken');
  });
});
