// 배열의 비구조화 할당

let array2: number[] = [1, 2, 3, 4, 5];
let [first, second, third, ...rest] = array2;
console.log(first, second, third, rest);
