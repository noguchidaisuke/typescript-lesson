"use strict";
var _a, _b;
const quill = {
    name: 'quill',
    role: 'front-end',
    follower: 100
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
const HELLO = toUpperCase('hello');
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    constructor() {
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly;
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
// タグ付きカインド
class A {
    constructor() {
        this.kind = 'a';
    }
}
class B {
    constructor() {
        this.kind = 'b';
    }
}
function behavior(aorb) {
    switch (aorb.kind) {
        case 'a':
        //処理
    }
}
const designer = {
    name: 'quill',
    role: 'web'
};
console.log(designer.aaaaa); //errorなし。indexは何でもアクセスできちゃう
const download = {
    name: 'qiita'
};
//　もしuserがあったらname なければundefined　最強
(_a = download.user) === null || _a === void 0 ? void 0 : _a.name;
//　なレッシュコアレシんぐ　undefinedのとき値入れる
const userData = (_b = download.user) !== null && _b !== void 0 ? _b : 'no-user';
// enumとnumは互換性あり　デフォルトは0
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
// 原則　左辺 > 右辺
let target = function (x, a) { };
let source = function (y, z) { };
target = source;
class AdvanPerson {
    constructor() {
        this.name = 'Peter';
    }
}
class AdvanCar {
    constructor() {
        this.name = 'Prius';
    }
}
const upperHello = function (x) { return 0; };
let interFunc;
interFunc = function (a, b) { return 0; };
let unionfunc;
// taple　?であってもなくても　可変長引数を取れる
function advancedFunc(...args) {
}
advancedFunc(0, "hi", true, 3, 3, 3, 3, 3);
const array = [10, 20];
const peter = {
    name: 'Peter',
    age: 38
};
