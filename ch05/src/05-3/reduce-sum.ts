// reduce(callback:(result:T, value:T),initialValue:T):T
// fold 함수는 reducek함수로 대처할 수 있다.

// 1부터 100까지 더하는 로직

import { range } from "../05-2/range";

let reduceSum: number = range(1, 100 + 1).reduce(
	(result: number, value: number) => result + value,
	0
);
console.log(reduceSum);
