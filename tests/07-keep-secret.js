(function () {
  'use strict';

  /* global require */
  const KeepSecret = require('keep-secret');

  test('A student knows how to keep a secret', (assert) => {
    const mySecret = 'My class rocks!';
    const dontTellNobody = new KeepSecret(mySecret);

    assert.ok(dontTellNobody instanceof KeepSecret,
    'Create a new class called \'KeepSecret\' that takes a single argument' +
    'and stores for later');

    // Checks to see you didn't store "dontTellNobody" on `this`
    // in your KeepSecret constructor
    for (const prop in dontTellNobody) {
      if (dontTellNobody.hasOwnProperty(prop)) {
        assert.notEqual(dontTellNobody[prop], mySecret,
        `The class 'KeepSecret' should not store the password as a public property.
         Currently stored to: ${prop}`);
      }
    }
    assert.equal(dontTellNobody.squeal(), mySecret,
    `The class instance 'KeepSecret' should be able to return
     the secret phrase passed in the constructor when 'squeal' is called`);
  });
}());
