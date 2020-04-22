/* 面倒
const human: {
  name: string;
  age: number;
} = {
  name: 'quill',
  age: 38
}
*/

/* タイプエイリアスにしよう
type Human =  {name: string, age: number}
const human: Human = {name: "daisuke", age: 21}      */

// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
  // 関数もこれでいける
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
}

// interface オブジェクトのみのtypeエイリアス　分かり易いyo
// readonly public private付けれる
interface Nameable {
  name?: string,
  nickname?: string;
}
// nicknameなくてもerror出ない
const nameable: Nameable = {name: "daisuke"}
// 継承できる
interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {

  constructor(public name: string, public age: number, public experience: number, initName?: string) {
    if (initName) {
      this.name = initName
    }
  }
  greeting(message: string = 'hello'): void {
    console.log(message);
  }
}
const tmpDeveloper = {
  name: "dai",
  age: 33,
  greeting(message: string) {
    console.log()
  }
}

// 変数の構造が一目瞭然
const user: Human = tmpDeveloper