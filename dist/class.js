"use strict";
/*
原型　object型で値を入れる　引数に取るためにconstructor
class Person {
  public name: string;
  private age: number;

  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }
  // thisの中身を明示してメソッド呼び出しにも型推測を働かせる
  incrementAge() {
    this.age += 1
  }
  greeting(this: Person) {
    console.log(`Hello! My Name is ${this.name}. This is ${this.age}`)
  }
}

let pe = new Person("dai", 33)
console.log(Person.species) // homo sapiens

new Person('quill', 38)
classの理解
1 ハッシュ形式でattr_accessor
2 constructor(x: 型){this.property = x}　で　initializer
3 function抜いたメソッド名定義
+
4 新しい型としてしようできるようになる。
5 privateプロパティは同selfの範囲しか使えない。

*/
// abstruct new Personは無理。module化 インスタンス作れない
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    // thisの中身を明示してメソッド呼び出しにも型推測を働かせる
    incrementAge() {
        Person.species = 'changed';
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My Name is ${this.name}. This is ${this.age}`);
        this.explainJob();
    }
}
// static = クラスメソッド
Person.species = 'Homo sapiens';
// getter = privateメソッドに呼び出し setter = 書き込み
class Teacher extends Person {
    // constractorを新しく作りたいのなら、引数を指定し直し
    // private指定してシングルトンパターン　まだ使い所イメージできない
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`Iam a teacher and I teah ${this.name}`);
    }
    get subject() {
        if (!this._subject) {
            throw new Error("There is empty");
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error("There is no subject");
        }
        this._subject = value;
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('Qyull', 38, 'Math');
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);
