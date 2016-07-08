export default class Lock {
  constructor(secret, keyHole) {

    this.unlock = function(attempt) {
      if (attempt === keyHole) {
        return secret;
      }
      return undefined;
    }
  }
}
