//npm install --save-dev @types/lodash
import axios, {shuffle} from 'axios';
import _ from 'lodash';
console.log(_.shuffle([1,2,3,4]))

namespace MyApp {
  const hello = 'hello';
  export const name = 'Quill';
  export interface Nameable {
    name: string
  }
}

// let name: string;
// interface name {}
// const name: string
// namespace name {
//   // 値として認識される 変数のみ無理
//   export const first: string = "perter";
// }
// name.first