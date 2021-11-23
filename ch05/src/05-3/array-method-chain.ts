const multiply = (result, val) => result * val;

let numbers3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tempresult = numbers3
	.filter((val) => val % 2 != 0)
	.map((val) => val * val)
	.reduce(multiply, 1);
let result = Math.round(Math.sqrt(tempresult)); // sqrt(X) = X의 제곱근 반환
console.log(result);
