// reduce(callback:(result:T, value:T),initialValue:T):T
// fold 함수는 reducek함수로 대처할 수 있다.

// 1부터 100까지 곱하는 로직

import { range } from "../05-2/range";

let reduceSum: number = range(1, 10 + 1).reduce(
	(result: number, val: number) => result * val,
	1
);
console.log(reduceSum); //3628800
