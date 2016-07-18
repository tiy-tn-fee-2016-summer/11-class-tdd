(function () {
  'use strict';

  /* global require */
  const Dog = require('dog');

  test('Dogs say what they should', (assert) => {
    const lassie = new Dog();
    assert.equal(lassie.says, 'life is ruff',
      `Create a class called 'Dog' that sets a property on itself within the constructor.
       The property should be called 'says' and the value should be set to 'life is ruff'`);
  });
}());
