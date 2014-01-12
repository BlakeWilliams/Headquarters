describe('User creates a project', function() {
  var store;

  beforeEach(function(done) {
    store = App.__container__.lookup('store:main');
    App.reset();

    Ember.run.next(function() {
      done();
    });
  });

  it('saves the project', function(done) {
    visit('/');

    var count;
    andThen(function() {
      count = find('.project').length;
    });

    click('#new-project');

    fillIn('.title', 'Awesome Project');
    fillIn('.description', 'Awesome description');

    click('#save');

    andThen(function() {
      var newCount = find('.project').length;
      expect(newCount).toBe(count + 1);

      done()
    });
  });
});
