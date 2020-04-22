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
abstract class Person {
  // static = クラスメソッド
  static species = 'Homo sapiens';
  static isAdult(age: number) {
    if (age > 17) return true;
    return false
  }
  constructor(readonly name: string, private age: number) {
  }
  // thisの中身を明示してメソッド呼び出しにも型推測を働かせる
  incrementAge() {
    Person.species = 'changed'
    this.age += 1
  }
  greeting(this: Person) {
    console.log(`Hello! My Name is ${this.name}. This is ${this.age}`)
    this.explainJob();
  }
  //　ダックタイピングもどき　継承先にメソッドがあることを保証する　クラスにもabstractを付与
  abstract explainJob(): void;
}

// getter = privateメソッドに呼び出し setter = 書き込み
class Teacher extends Person {
  private static instance: Teacher;
  explainJob() {
    console.log(`Iam a teacher and I teah ${this.name}`);
  }

  get subject() {
    if (!this._subject) {
      throw new Error("There is empty")
    }
    return this._subject
  }
  set subject(value) {
    if  (!value) {
      throw new Error("There is no subject")
    }
    this._subject = value;
  }
  // constractorを新しく作りたいのなら、引数を指定し直し
  // private指定してシングルトンパターン　まだ使い所イメージできない
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher('Qyull', 38, 'Math');
    return Teacher.instance;
  }
}

const teacher = Teacher.getInstance()
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2)