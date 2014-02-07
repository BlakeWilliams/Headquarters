describe('App', function() {
  var token;
  beforeEach(function() {
    token = "testtoken";
    App.revokeToken();
  })
  describe('#setToken', function() {
    it("sets token on app and storage", function() {
      App.setToken(token);
      expect(token).toBe(App.get('storage').token);
      expect(token).toBe(App.get('token'));
    });
    it("determines if a user is authenticated or not", function() {
      expect(App.isAuthenticated()).toBeFalsy();
      App.setToken(token);
      expect(App.isAuthenticated()).toBeTruthy();
    });
  });
});
