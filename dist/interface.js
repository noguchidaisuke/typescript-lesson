"use strict";
/* 面倒
const human: {
  name: string;
  age: number;
} = {
  name: 'quill',
  age: 38
}
*/
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
// nicknameなくてもerror出ない
const nameable = { name: "daisuke" };
class Developer {
    constructor(name, age, experience, initName) {
        this.name = name;
        this.age = age;
        this.experience = experience;
        if (initName) {
            this.name = initName;
        }
    }
    greeting(message = 'hello') {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: "dai",
    age: 33,
    greeting(message) {
        console.log();
    }
};
// 変数の構造が一目瞭然
const user = tmpDeveloper;
