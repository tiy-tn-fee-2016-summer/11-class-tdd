export default class Foo {
  (function () {
    'use strict';

    /* global require */
    const Foo = require('foo');

    test('There is a Foo class and an instance called bar', (assert) => {
      // Create an instance of Foo and set it to the variable "bar"

      assert.ok(bar instanceof Foo,
        'Create a simple class called \'Foo\'and create a new instance from it called \'bar\'');
    });
  }());
}
