// 익명함수
let value = (function (a, b) {
	return a + b;
})(1, 2);
console.log(value);

// 함수를 담는 변수는 let보다는 const를 사용하는 것이 바람직하다.
