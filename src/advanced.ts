type Engineer = {
  name: string;
  role: string;
}
type Blogger = {
  name: string;
  follower: number;
}
type EnginnerBlogger = Engineer & Blogger;
const quill: EnginnerBlogger = {
  name: 'quill',
  role: 'front-end',
  follower: 100
}
type NumberBoolean = number | boolean
type StringNumber = string | number
type Mix = NumberBoolean & StringNumber
// 重複するタイプ
//　オーバーロード。string number それぞれのメソッド使いたい場合
function toUpperCase (x: string): string
function toUpperCase (x: number): number
function toUpperCase (x: string | number): string | number {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x
}
const HELLO = toUpperCase('hello');


type NomadWorker = Engineer | Blogger
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role)
  }
  if ('follower' in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

class Dog {
  kind: 'dog' = 'dog'
  speak() {
    console.log('bow-wow')
  }
}
class Bird {
  kind: 'bird' =  'bird'
  speak () {
    console.log('tweet')
  }
  fly() {
    console.log('flutter')
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet)  {
  pet.speak();
  switch(pet.kind) {
    case 'bird':
      pet.fly
  }
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());

// タグ付きカインド
class A {
  kind: 'a' = 'a'
}
class B {
  kind: 'b' = 'b'
}
type AorB =  A|B
function behavior(aorb: AorB) {
  switch(aorb.kind) {
    case 'a':
      //処理
  }
}


interface Designer {
  name: string;
  [index: string]: string
}
const designer: Designer ={
  name: 'quill',
  role: 'web'
}

console.log(designer.aaaaa) //errorなし。indexは何でもアクセスできちゃう

interface Download {
  name: string;
  user?: {
    name?:  {
      first: string;
      last: string;
    }
  }
}

const download: Download = {
  name: 'qiita'
}
//　もしuserがあったらname なければundefined　最強
download.user?.name
//　なレッシュコアレシんぐ　undefinedのとき値入れる
const userData = download.user ?? 'no-user'


// enumとnumは互換性あり　デフォルトは0
enum Color {
  RED,
  BLUE
}

// 原則　左辺 > 右辺
let target = function(x: string,a: number){}
let source = function(y:string, z: number){}
target = source;
　
class AdvanPerson {
  name: string = 'Peter'
}
class AdvanCar {
  name: string = 'Prius'
}

interface TmpFunc {
  (x: string): number
  (y: number): number
}
const upperHello: TmpFunc = function (x: string | number) { return 0 }


interface FuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
}
interface FuncB {
  (a: string): number;
}
let interFunc: FuncA & FuncB;
interFunc = function(a: number | string, b?: number | string) { return 0 }

interface FuncC {
  (a: string): number
}
interface FuncD {
  (a: number): number
}
let unionfunc: FuncC | FuncD

// taple　?であってもなくても　可変長引数を取れる
function advancedFunc (...args: readonly [number, string, boolean?, ...number[]]) {
}
advancedFunc(0,"hi",true,3,3,3,3,3)

const array = [10,20] as const

const peter = {
  name: 'Peter',
  age: 38
} as const;
type Petertype = typeof peter