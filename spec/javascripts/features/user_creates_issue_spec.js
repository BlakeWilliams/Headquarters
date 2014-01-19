describe('User creates an issue', function() {
  it('saves the issue', function(done) {
    visit('/projects/1').then(function(x) {
      count = find('.issue').length;
    }).then(function() {
      fillIn('#new-issue input', 'Awesome Issue');
      return keyEvent('#new-issue input', 'keyup', 13);
    }).then(function() {
      var newCount = find('.issue').length;
      expect(newCount).toBe(1);
      done();
    });
  });

  it('clears the input after save', function(done) {
    visit('/projects/1')
    .fillIn('#new-issue input', 'Awesome Issue')
    .keyEvent('#new-issue input', 'keyup', 13).then(function() {
      done();
    });
  });
});
