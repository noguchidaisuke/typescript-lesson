"use strict";
// class = Constructor関数のシンタックスシュガー　対象をFunctionにすればおk
// 用途　class作成時に何かしら処理をしたい
/*
function Logging(constructor: Function) {
  console.log('Logging...')
}
@Logging
class User {
  name: string = 'Quill'
  constructor() {
    console.log('User was created')
  }
}
new User
*/
/* decorator factory 用途　引数を撮りたい
function Logging(message: string) {
  return function (constructor: Function) {
    console.log('Logging...')
    console.log(message)
  }
}

@Logging('loggin user')
class User {
  name: string = 'Quill'
  constructor() {
    console.log('User was created')
  }
}
new User
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
// コンポーネントを使ってh1タグを書き換える
function Component(template: string, selector: string){
  // メソッド内でインスタンス作成する場合。　constructor: Functionは判別してくれない。
  return function(constructor: { new(): {name: string} }) {
    const mountedElement = document.querySelector(selector);
    const instance = new constructor();
    if (mountedElement) {
      mountedElement.innerHTML = template;
      console.log(instance.name)
      mountedElement.querySelector('h1')!.textContent = instance.name
    }
  }
}
@Component('<h1>{{ name }}</h1>','#app')
@Logging('loggin user')
class User {
  name = 'Quill';
  constructor() {
    console.log('User was created')
  }
}
new User
*/
function Logging(message) {
    return function (constructor) {
        console.log('Logging...');
        console.log(message);
    };
}
function Component(template, selector) {
    // メソッド内でインスタンス作成する場合。　constructor: Functionは判別してくれない。
    return function (constructor) {
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
            mountedElement.innerHTML = template;
            console.log(instance.name);
            mountedElement.querySelector('h1').textContent = instance.name;
        }
        return class extends constructor {
            constructor(...args) {
                super(...args);
            }
        };
    };
}
function PropertyLogging(target, propertyKey) {
    console.log('property');
    console.log(target);
    console.log(propertyKey);
}
function MethodLogging(target, propertyKey, descriptor) {
    console.log('property');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
function AccessorLogging(target, propertyKey, descriptor) {
    console.log('property');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
let User = class User {
    constructor() {
        this.name = 'Quill';
        console.log('User was created');
    }
};
__decorate([
    PropertyLogging
], User.prototype, "name", void 0);
User = __decorate([
    Component('<h1>{{ name }}</h1>', '#app'),
    Logging('loggin user')
], User);
new User();
