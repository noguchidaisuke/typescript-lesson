/*
言語化すると
foodのclassないでは　selfはclass instance
メソッド内ではレシーバー ただし、クラス定義メソッドに関しては常にレシーバーはインスタンスオブジェクト

bindメソッドはselfのスコープを渡せる

シングルトン。
1 private staticつけた変数定義
2 comstructorをprivateにして外からnew実行不能
3 static getでインスタンス作成 変数に代入
*/
interface Scoreable {
  readonly totalScore: number;
  render(): void;
}
interface Foodable {
  element: HTMLDivElement;
  clickEventHandler(): void;
}
interface Foodsable {
  elements: NodeListOf<HTMLDivElement>;
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}
class Score implements Scoreable{
  private static instance: Score
  get totalScore(){
    const foods = Foods.getInstance();
    return foods.activeElementsScore.reduce((total, score) => total + score, 0)
  }
  render() {
    document.querySelector('.score__number')!.textContent = String(this.totalScore);
  }
  private constructor() {}
  static getInstance() {
    if(!Score.instance) {
      Score.instance = new Score()
    }
    return Score.instance;
  }
}
class Food implements Foodable{
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click',this.clickEventHandler.bind(this));
  }
  clickEventHandler(){
    this.element.classList.toggle('food--active');
    const score = Score.getInstance();
    score.render();
  }
}
class Foods implements Foodsable{
  private static instance: Foods;
  // selector allにするとエレメント特定できなくなる
  elements = document.querySelectorAll<HTMLDivElement>('.food');
  private _activeElements: HTMLDivElement[] = []
  private _activeElementsScore: number[] = []
  get activeElements() {
    this._activeElements = []
    this.elements.forEach(element => {
      if (element.classList.contains('food--active')){
        this._activeElements.push(element)
      }
    })
    return this._activeElements;
  }
  get activeElementsScore(){
    this._activeElementsScore = []
    this.activeElements.forEach(element => {
      const foodScore = element.querySelector('.food__score');
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent))
      }
    })
    return this._activeElementsScore
  }

  private constructor() {
    this.elements.forEach(element => {
      new Food(element);
    })
  }
  static getInstance() {
    if(!Foods.instance) {
      Foods.instance = new Foods();
    }
    return Foods.instance;
  }
}
const foods = Foods.getInstance();

/*
getter は　こうもかける
値を取り出す際分かり易い上()のぞいてかける

class Foods{
  // selector allにするとエレメント特定できなくなる
  elements = document.querySelectorAll<HTMLDivElement>('.food');
  private activeEles: HTMLDivElement[] = []

  constructor() {
    this.elements.forEach(element => {
      new Food(element);
    })
  }

  addElements() {
    this.activeEles = []
    this.elements.forEach(element => {
      if (element.classList.contains('food--active')) {
        this.activeEles.push(element)
      }
    })
    return this.activeEles
  }
}
const foods = new Foods();
*/

// 変数が作成されるタイミングとかインスタンスが制止せされるタイミングがわからない