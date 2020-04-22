"use strict";
const person = {
    name: {
        first: 'jack',
        last: 'Smith'
    },
    age: 21
};
/* union型　|で区切って複数型指定 */
let unionType = 10;
const fruits = ['Apple', 'Banana', 'Grape', 1];
/*tupple 順番指定　厳しい配列*/
const book = ['bussiness', 21, true];
/* Enum */
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
/* literal 指定した文字列しか代入できなくなる*/
let apple;
const app = 'app'; /* 内部でリテラルに変換　*/
let clothSize;
/* functionの引数は型必須　戻り値にもいる */
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(3, 2));
/* 関数代入　代入元or先どちらかに型定義していれば良い */
const anotherAdd = function add(num1, num2) { return num1 + num2; };
/* アロー関数 左右どちらかに型定義が必要*/
/* 使い所　*/
const doubleName = a => a * 2;
function doubleNumber(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(2 * num);
}
doubleNumber(21, doubleNum => doubleNum);
// anyとの違い: 他の変数に代入する際制限がある。
let unKnownInput;
let anyInput;
let text;
unKnownInput = "hell";
// たとえstringであっても代入することはできない
// text = unKnownInput;
// 代入したいなら保証する必要がある
if (typeof unKnownInput === "string") {
    text = unKnownInput;
}
