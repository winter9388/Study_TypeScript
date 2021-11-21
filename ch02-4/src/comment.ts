// 함수 시그니쳐 - 함수의 타입

//(매개변수1 타입, 매개변수2 타입,...) => 반환값 타입
let printMe: (string, number) => void = function (
	name: string,
	age: number
): void {
	console.log(name, age);
};
printMe("jack", 32);
