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