"use strict";
/* generics　基本形引数にタイプをとってそれを適応させる
function copy<T>(value: T):T {
  return value;
}
console.log(copy<string>("hello"))

keyof と　extendsがない
*/
// extendsで条件絞り込み。
function copy(value, key) {
    return value;
}
console.log(copy({ name: 'Quill', age: 38 }, 'name'));
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() { return this.data; }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get());
const tmpDatabase = {
    id: 3,
    data: [32]
};
const fetchData = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
});
fetchData.then(data => {
    data.toUpperCase();
});
const vegetables = ['Tomato', 'Broccoli', 'Asparagus'];
let tmp2;
let tmp3;
let tmp4;
let tmp5;
