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

function Logging(message: string) {
  return function (constructor: Function) {
    console.log('Logging...')
    console.log(message)
  }
}
function Component(template: string, selector: string){
  // メソッド内でインスタンス作成する場合。　constructor: Functionは判別してくれない。
  return function(constructor: { new(...args: any[]): {name: string} }) {
    const mountedElement = document.querySelector(selector);
    const instance = new constructor();
    if (mountedElement) {
      mountedElement.innerHTML = template;
      console.log(instance.name)
      mountedElement.querySelector('h1')!.textContent = instance.name
    }
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
      }
    }
  }
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log('property')
  console.log(target)
  console.log(propertyKey)
}

function MethodLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('property')
  console.log(target)
  console.log(propertyKey)
  console.log(descriptor)
}

function AccessorLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('property')
  console.log(target)
  console.log(propertyKey)
  console.log(descriptor)
}

@Component('<h1>{{ name }}</h1>','#app')
@Logging('loggin user')
class User {
  @PropertyLogging
  name = 'Quill';
  constructor() {
    console.log('User was created')
  }
}
new User()