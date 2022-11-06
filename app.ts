type name = {
  (arr: number[]): void; //arr은 숫자의 배열이고 아무것도 반환X
  (arr: boolean[]): void;
};

const superPrint: name = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false]);
