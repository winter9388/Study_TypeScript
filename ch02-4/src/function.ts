// 자바 스크립트에서 함수는 Function클래스의 인스턴스 이다.
let add = new Function("a", "b", "return a+b"); //add가 함수로서의 동작을 함을 확인
let result = add(1, 2);
console.log(result);

// 함수 표현식 으로써의 함수 선언
let add2 = function (a, b) {
	return a + b;
};
console.log(add(1, 2));
