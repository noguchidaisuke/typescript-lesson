class Person {
  name: string;
  age: number;

  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }
  // thisの中身を明示してメソッド呼び出しにも型推測を働かせる
  greeting(this: Person) {
    console.log(`Hello! My Name is ${this.name}. This is ${this.age}`)
  }
}

const quill = new Person("Quill", 38);
quill.greeting();

/*
classの理解
1 ハッシュ形式でattr_accessor
2 constructor(x: 型){this.property = x}　で　initializer
3 function抜いたメソッド名定義
+
4 新しい型としてしようできるようになる。
*/