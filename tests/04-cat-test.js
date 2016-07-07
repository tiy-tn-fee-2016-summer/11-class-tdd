(function () {
  'use strict';

  /* global require */
  const Cat = require('cat');
  var garfield = new Cat();
   garfield.growl();


  test('Cats are a little bit different', (assert) => {
    // Create an instance of Cat and set it to the variable "bar"
    assert.ok(garfield instanceof Cat,
      'Create a class called \'Cat\' and a new instance of Cat called \'garfield\'');

    assert.equal(garfield.growl(), 'meow',
      'The class should have a method called \'growl\' that returns the string \'meow\'');
  });
}());
