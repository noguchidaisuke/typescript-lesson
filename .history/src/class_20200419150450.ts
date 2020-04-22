class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }

  greeting() {
    console.log(`Hello! My Name is ${this.name}`)
  }
}

const quill = new Person("Quill");

console.log(quill)