// 일등 함수 (first-class function)
// 변수와 함수의 차이를 두지 않음
let a = function (a, b) {
	return a + b;
};
a = function (a, b) {
	return a - b;
};
