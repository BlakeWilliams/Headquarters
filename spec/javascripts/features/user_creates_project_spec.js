describe('User creates a project', function() {

  beforeEach(function() {
    spyOn(App, 'isLoggedIn').and.returnValue(true);
  });

  it('saves the project', function(done) {
    visit('/').then(function() {
      count = find('.project').length;
      return click('#new-project');
    }).then(function() {
      fillIn('.title', 'Awesome Project');
      fillIn('.description', 'Awesome description');

      return click('#save');
    }).then(function() {
      var newCount = find('.project').length;
      expect(newCount).toBe(count + 1);
      done()
    });
  });
});
