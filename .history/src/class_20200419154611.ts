class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
  // thisの中身を明示してメソッド呼び出しにも型推測を働かせる
  greeting(this: Person) {
    console.log(`Hello! My Name is ${this.name}`)
  }
}

const quill = new Person("Quill");
/*
classの理解
1 ハッシュ形式でattr_accessor
2 constructor(x: 型){this.property = x}　で　initializer
3 function抜いたメソッド名定義
+
4 新しい型としてしようできるようになる。
*/