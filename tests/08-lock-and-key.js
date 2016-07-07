(function () {
  'use strict';

  /* global require */
  const Lock = require('lock');
  const Key = require('key');

  test('You are basically a locksmith now!', (assert) => {
    const sensitive = 'shhhhh!';
    const rightKey = new Key();
    const wrongKey = new Key();
    const lock = new Lock(sensitive, rightKey);

    assert.ok(rightKey instanceof Key,
    'Create a class named \'Key\' that takes no arguments in its constructor');

    assert.ok(lock instanceof Lock,
    'Create a class named \'Lock\' that takes two arguments in its , a secret and a \'Key\' object');

    assert.notEqual(lock.unlock(wrongKey), sensitive,
    'If the wrong key is passed to the \'unlock\' function for a \'Lock\' ' +
    'then return \'undefined\'');
    assert.equal(lock.unlock(rightKey), sensitive,
    `If the right key is passed to the 'unlock' function for a 'Lock'
     then return the secret phrase passed in the constructor`);
  });
}());
