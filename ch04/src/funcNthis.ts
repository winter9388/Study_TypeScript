// function함수와 this키워드

class A {
	value: number = 1;
	method: () => void = function (): void {
		console.log(`value: ${this.value}`);
	};
}

let thisA = new A();
thisA.method(); //value: 1 - 06행의 this.value = 1

// class A 의 간소화.
// 클래스의 속성중 함수 표현식을 담는 속성은 function키워드를 생략할수 있다 - 단축 구문(shorthand)
class B {
	constructor(public value: number = 1) {}
	method(): void {
		// => shorthand
		console.log(`value: ${this.value}`);
	}
}

let thisB = new B();
thisB.method();
