class Person1 {
	name: string;
	age?: number;
}

let jack1: Person1 = new Person1();
jack1.name = "jack";
jack1.age = 32;
console.log(jack1);

//public 컨스트럭터의 매개변수가 클래스 안에 정의된것 처럼 작동 결과는 class Person3과 같다
class Person2 {
	constructor(public name: string, public age: number) {}
}

let jack2: Person2 = new Person2("jack", 32);
console.log(jack2);

class Person3 {
	name: string;
	age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

let jack3: Person3 = new Person3("jack", 32);
console.log(jack3);

//interface

interface IPerson4 {
	name: string;
	age?: number;
}
// Interface와 public의 응용
class Person4 implements IPerson4 {
	constructor(public name: string, public age: number) {}
}

let jack4: Person4 = new Person4("jack", 32);
console.log(jack4);

// 추상 클래스 - 자신을 상속하는 다른 클래스에서 이 속성이나 메서드를 구현하게 함
abstract class AbstractPerson5 {
	abstract name: string;
	constructor(public age?: number) {}
}

//추상 클래스는 아래와 같이 인스턴스를 만들수 없다. 상속을 받아 사용해야 함
//let jack5: AbstractPerson5 = new AbstractPerson5("jack", 32);

//클래스의 상속
class Person5 extends AbstractPerson5 {
	constructor(public name: string, public age?: number) {
		super(age);
	}
}
let jack5: Person5 = new Person5("jack", 32);
console.log(jack5);
