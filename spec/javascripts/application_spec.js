describe('App', function() {
  describe('#setToken', function() {
    it("sets token on app and storage", function() {
      var token = "testtoken";
      App.setToken(token);
      expect(token).toBe(App.get('storage').token);
      expect(token).toBe(App.get('token'));
    });
  });
});
