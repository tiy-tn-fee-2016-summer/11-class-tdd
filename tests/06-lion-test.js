(function () {
  'use strict';

  /* global require */
  const Lion = require('lion');
  const Cat = require('cat');


  test('Really BIG cats', (assert) => {
    assert.ok(new Lion() instanceof Cat,
    'Create a new class called \'Lion\' that extends from the \'Cat\' class');

    assert.equal(new Lion().size, 'BIG',
    'The \'Lion\' class constructor should set a property called \'size\' to the string \'BIG\'');
  });
}());
