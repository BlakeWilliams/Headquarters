describe('User edits a project', function() {
  describe('title', function() {
    it('updates the title', function(done) {
      visit('/projects/1').then(function() {
        find('#title span').dblclick();
        return fillIn('#title input', 'New Name');
      }).then(function() {
        var e = $.Event('keyup');
        e.which = 13;
        find('#title input').trigger(e);

        var text = find('#title span').text().trim();
        expect(text).toBe('New Name');
        done();
      });
    });

  });
});
