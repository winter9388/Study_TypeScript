//고차 함수 - 또 다른 함수를 반환하는 함수.
const add3 = (a: number, b: number): number => a + b; //일반 함수
const add4 =
	(a: number): ((number) => number) =>
	(b: number): number =>
		a + b; //고차 함수

// 고차 함수 예제 - 중첩 함수를 반환 할수 있다.
const add5 =
	(a: number): ((number) => number) =>
	(b: number): number =>
		a + b;
const result2 = add5(1)(2);
console.log(result2);

// 예제 해설을 위한 코드
type NumberToNumberFunc = (number) => number; //number타입 매개변수를 받아 number타입의 값을 반환하는 함수 시그니쳐
export const add6 = (a: number): NumberToNumberFunc => {
	const _add6: NumberToNumberFunc = (b: number): number => {
		return a + b; //클로저 - 외부 함수 add6의 매개변수 a의 값을 받음 // 고차함수는 클로저기능이 반드시 필요하다.
	};
	return _add6;
};

let fn: NumberToNumberFunc = add6(1); // NumberToNumerFunc타입의 값인 중첩 함수 _add6를 반환
console.log(fn);

let result = fn(2); // fn이 함수 _add6을 반환했으므로 fn뒤에 함수 호출 연산자를 붙일 수 있음.
console.log(result);
console.log(add6(1)(2)); // fn = add6(1) 이므로 add6(1)의 함수 호출 연산자를 붙여 add6(1)(2)로 사용

// 그외 고차 함수 예제
const multiply = (a) => (b) => (c) => a * b * c;
console.log(multiply(1)(2)(3)); //6
console.log(multiply(1)(2)); // 결과는 아직 값이 아닌 함수 - '부분 애플리케이션' 혹은 '부분 적용 함수'
