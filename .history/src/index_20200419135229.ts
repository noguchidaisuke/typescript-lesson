
const person = {
  name: {
    first: 'jack',
    last: 'Smith'
  },
  age: 21
}

/* union型　|で区切って複数型指定 */
let unionType: (number | string) = 10;
const fruits: (string | number)[] = ['Apple','Banana','Grape',1]

/*tupple 順番指定　厳しい配列*/
const book: [string, number, boolean] = ['bussiness',21,true]

/* Enum */
enum CoffeeSize {
  SHORT= 'SHORT',
  TALL= 'TALL',
  GRANDE= 'GRANDE',
  VENTI= 'VENTI'
}
const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
/* literal 指定した文字列しか代入できなくなる*/
let apple: 'apple'
const app = 'app' /* 内部でリテラルに変換　*/

type ClothSize = 'small' | 'medium' | 'large'
let clothSize:  ClothSize

/* functionの引数は型必須　戻り値にもいる */
function add(num1: number, num2: number): number {
  return num1 + num2
}

console.log(add(3, 2));

/* 関数代入　代入元or先どちらかに型定義していれば良い */
const anotherAdd: (n1: number, n2: number) => number = function add(num1: number,num2: number): number { return num1 + num2 }

/* アロー関数 */
/* 使い所　*/
const doubleName: (a: number) => number = a => a * 2

function doubleNumber(num: number,cb: (num: number) => number): void {
  const doubleNum = cb(num*2)
  console.log(2 * num)
}

doubleNumber(21, doubleNum  => doubleNum)

// anyとの違い: 他の変数に代入する際制限がある。
let unKnownInput: unknown;
let anyInput: any;
let text: string;
unKnownInput =  "hell"

// たとえstringであっても代入することはできない
// text = unKnownInput;
// 代入したいなら保証する必要がある
if (typeof unKnownInput === "string") {
  text = unKnownInput;
}
