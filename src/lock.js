// import Key from 'key';
export default class Lock {
  constructor(secret, key) {
    console.log('The key is: ', key);
    this.unlock = function (arg) {
      console.log('Trying to unlock with key', arg);
      console.log(key);
      if (arg !== key){
        return 'nope'
      }
      return 'shhhhh!'
    }
  }
}
