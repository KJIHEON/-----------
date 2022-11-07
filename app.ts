//제네릭
// type Player<E> = {
//   name: string;
//   extraInfo: E;
// };

// type NicoExtra = {
//   favFood: string;
// };
// type NicoPlayer = Player<NicoExtra>;

// const nico: NicoPlayer = {
//   name: 'nico',
//   extraInfo: {
//     favFood: 'nnoon',
//   },
// };
// const lynn: Player<null> = {
//   name: 'lynn',
//   extraInfo: null,
// };

/*객체 지향 class
타입스크립트는 constructor 안에 파라미터 넣어주면 함수를 만들어줌 
this.firstName = firstName
private 밖에서 접근 금지
public 밖에서 접근이 가능하다
protected 클래서 밖에서 접근 금지 상속 받을 때 사용 가능
abstract 추상, 요약
즉 abstract를 사용하면 상속을 받아서 사용을 해야한다.

ex) 
abstract class User {
  constructor(
 ) {}
}

class zzzz extends User
*/

abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
//User라는 추상클래스를 상속 받음
class Player extends User {}
//추상 클래스는 사용할 수 없음 인스턴스 생성 불가
const nico = new Player('nico', 'las', '니꼬');
nico.getFullName();
