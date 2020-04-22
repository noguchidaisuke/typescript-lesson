class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }

  greeting() {
    console.log(``)
  }
}

const quill = new Person("Quill");

console.log(quill)