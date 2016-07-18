export default class Lock {
  constructor(phrase, key) {

    this.unlock = (attempt) => {
      if (attempt === key) {
        return phrase;
      }
    };

  }
}
