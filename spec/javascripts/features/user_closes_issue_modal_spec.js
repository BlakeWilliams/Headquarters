describe('User closes issue modal', function() {

  beforeEach(function() {
    spyOn(App, 'isAuthenticated').and.returnValue(true);
  });

  describe('when using the close button', function() {
    it('redirects to the project', function(done) {
      visit('/projects/1/issues/1').then(function() {
        return click('.modal-backdrop');
      }).then(function() {
        expectRouteToBeProjectIndex();
        done();
      });
    });

  });

  describe('when using the background', function() {
    it('redirects to the project', function(done) {
      visit('/projects/1/issues/1').then(function() {
        return click('.close');
      }).then(function() {
        expectRouteToBeProjectIndex();
        done();
      });
    });

  });

  var expectRouteToBeProjectIndex = function(done) {
    var currentRoute = App.Router.router.currentHandlerInfos.get('lastObject.name');
    expect(currentRoute).toBe('project.index');
  }

});
