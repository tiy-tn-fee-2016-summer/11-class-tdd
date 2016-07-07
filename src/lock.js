import Key from 'key';
export default class Lock {
  constructor(secret, key) {
    this.unlock = function(arg) {
      console.log(arg);
    if (arg !== key) {
      return 'No!';
      }
      return secret;
    }
  }
}



//
//
//     this.wrongKey = function() {
//       return NOT Key.Key;
//     };
//
//     this.unlock = function() {
//       return Key.Key;
//     };
//   }
// }
console.log(Key);
