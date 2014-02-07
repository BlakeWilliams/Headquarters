describe('User edits a project', function() {
  beforeEach(function() {
    spyOn(App, 'isLoggedIn').and.returnValue(true);
  });
  describe('title', function() {
    it('updates the title', function(done) {
      visit('/projects/1').then(function() {
        find('#title span').dblclick();
        return fillIn('#title textarea', 'New Name');
      }).then(function() {
        var e = $.Event('keyup');
        e.shiftKey = false;
        e.which = 13;
        find('#title textarea').trigger(e);

        var text = find('#title span').text().trim();
        expect(text).toBe('New Name');
        done();
      });
    });

  });
});
