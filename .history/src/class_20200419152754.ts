class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
  // thisの中身を明示してメソッド呼び出しにも型推測を働かせる
  greeting(this: { name: string }) {
    console.log(`Hello! My Name is ${this.name}`)
  }
}

const quill = new Person("Quill");
quill.greeting();
const anotherQuill = {
  name: 'anotherQuill',
  anotherGreeting: quill.greeting
}
anotherQuill.anotherGreeting();


const ex = a => a