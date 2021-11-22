// 제네릭 함수의 타입 추론
// 제네릭 형대로 구현된 함수는 다음과 같이 명시 한다
// 함수이름<타입 변수>(매개변수)

const identity = <T>(n: T): T => n;
console.log(
	identity<boolean>(true), // true - 제네릭 형태의 함수 명시
	identity(true) // true
);
