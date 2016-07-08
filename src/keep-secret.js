export default class KeepSecret {

  constructor(mySecret) {
    this.squeal = function() {
      return mySecret;
    };
  }
}
