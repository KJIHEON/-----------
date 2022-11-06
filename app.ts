//<T>,<V> 제네릭을 받는다
type name = {
  //타입스크립트가 유추해서 보여줌
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder; //arr은 숫자의 배열이고 아무것도 반환X
};

const superPrint: name = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]);
const x = superPrint([true, false, true]);
const c = superPrint(['a', 'b', 'x']);
const w = superPrint([1, 2, true, false, 'ss']);
