(function () {
  'use strict';

  /* global require */
  const FacelessMan = require('faceless-man');

  test('The order of the Faceless Men', (assert) => {
    const girl = new FacelessMan('The Waif');

    // Create a new instance of FacelessMan with the name Jaqen H\'ghar
    // set it to the variable "aMan"

    assert.ok(aMan instanceof FacelessMan,
    'Create a class called \'FacelessMan\' and a new instance of FacelessMan called \'aMan\'');

    assert.equal(aMan.name, 'Jaqen H\'ghar',
    'A girl gives a man his own name (aMan.name should be set to \'Jaqen H\'ghar\')');

    assert.equal(girl.name, 'The Waif',
    `The FacelessMan constructor takes an argument
    and sets a value called 'name' based on the passed in argument`);
  });
}());
