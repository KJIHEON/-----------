// //제네릭
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

// /*객체 지향 class
// 타입스크립트는 constructor 안에 파라미터 넣어주면 함수를 만들어줌
// this.firstName = firstName
// private 밖에서 접근 금지
// public 밖에서 접근이 가능하다 그냥 사용가능
// protected 클래서 밖에서 접근 금지 상속 받을 때 사용 가능
// abstract 추상, 요약
// 즉 abstract를 사용하면 상속을 받아서 사용을 해야한다.

// ex)
// abstract class User {
//   constructor(
//  ) {}
// }

// class zzzz extends User
// */

// abstract class User {
//   constructor(
//     private firstName: string,
//     private lastName: string,
//     public nickname: string
//   ) {}
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// //User라는 추상클래스를 상속 받음
// class Player extends User {}
// //추상 클래스는 사용할 수 없음 인스턴스 생성 불가
// const nico = new Player('nico', 'las', '니꼬');
// nico.getFullName();

//단어 사전 만들기
// type Words = {
//   //객체안에 키가 스트링인 타입을 만듬
//   [key: string]: string;
// };

// class Dict {
//   private words: Words;
//   //초기화를 시켜주고
//   constructor() {
//     this.words = {};
//   }
//   //단어 만들기 word의 타입은 Word클래서의 타입이다
//   add(word: Word) {
//     //만약 단어의 정의가 비어있을때 def랑 똑같이 보내준다
//     if (this.words[word.term] === undefined) {
//       this.words[word.term] = word.def;
//     }
//   }
//   def(trem: string) {
//     return this.words[trem];
//   }
// }

// class Word {
//   constructor(public term: string, public def: string) {}
// }
// const kimchi = new Word('kimchi', '한국의 음식');

// const dict = new Dict();

// dict.add(kimchi);

// dict.def('kimchi');

//인터페이스  오브젝트의 모양을 알려줄 때만 사용 다른건 사용 불가능
// type Team = 'red' | 'blue' | 'yellow';
// type Health = 1 | 5 | 10;

// interface Players {
//   nickname: string;
//   team: Team;
//   health?: Health;
// }

// type Player = {
//   nickname: 'nico';
//   team: 'blue';
//   health: 10;
// };

// const nico: Player = {
//   nickname: 'nico',
//   team: 'blue',
//   health: 10,
// };
// console.log(nico);

//111
// type Nickname = string;
// type Health = number;
// type Friends = Array<string>;

// type Player = {
//   nickname: Nickname;
//   healthBar: Health;
// };
// const nico: Player = {
//   nickname: 'nico',
//   healthBar: 10,
// };
// type Food = string;
// const cimchi: Food = 'd마씻어';
// abstract 요약
//인터페이스는 상속 가능
// abstract class User {
//   constructor(protected firstName: string, protected lastName: string) {} //초기화
//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }

// class Player extends User {
//   fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   sayHi(name: string) {
//     return `Hello ${name}, My name is ${this.fullName()}`;
//   }
// }

//인터페이스는 오브젝트의 모양을 지정, 타입이나 인터페스도 가능하고 리턴값에 넣을수고 있다.
/*
interface User {
  firstName: string;
  lastName: string; //초기화
  sayHi(name: string): string; //이름을 넣으면 값을 받아 스트링을 반환 해주는 함수
  fullName(): string; //스트링 반환
}
interface Human {
  health: number;
}

class Player implements User, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName(): string {
    //첫번째 이름과 마지막 이름을 핲져준다?,
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    //받은 name 과 fullName 함수를 실행 시켜서 결과 값을 리턴한다.
    return `Hello ${name}, My name is ${this.fullName()}`;
  }
}
//오브젝트 값만 넣어줘도 가능
function makeUser(user: User) {
  return {
    firstName: 'nico',
    lastName: 'las',
    fullName: () => 'ㅇㅇㅇ',
    sayHi: (name) => '안녕',
  };
}

makeUser({
  firstName: 'nico',
  lastName: 'las',
  fullName: () => 'ㅇㅇㅇ',
  sayHi: (name) => '안녕',
});
*/
/*Type Aliases과 Interfaces의 차이점
Type Aliases과 인터페이스는 매우 유사하며 많은 경우
자유롭게 선택할 수 있습니다. 인터페이스의 거의 모든 기능은 
type에서 사용할 수 있으며, 주요 차이점은 type을 다시 열어 새 속성을 추가할 수 없는 것입니다. 반면 인터페이스는 항상 확장 가능합니다.
결론: 대부분의 경우 개인 취향에 따라 선택 가능*/
