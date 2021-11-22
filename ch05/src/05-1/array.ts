// 배열

// let 배열 이름 = new Array(배열 길이)

let array = new Array();
// push - 배열 마지막 인덱스에 값 추가
array.push(1);
array.push(2);
array.push(3);
console.log(array);

// []단축 구문
let numbers = [1, 2, 3];
let string = ["hello", "world"];
console.log(numbers, string);

// isArray - 매개 변수로 전달받은 값이 배열인지 객체 인지 판별
// 자바스크립트의 배열은 객체이다. 배열은 Array클래스의 인스턴스이고 인스턴스는 객체 이기 때문
let a = [1, 2, 3];
let o = { name: "jack", age: 32 };
console.log(Array.isArray(a), Array.isArray(o)); // true false

// 배열의 타입
// number[],string[], ...등등
let numArray: number[] = [1, 2, 3];
let strArray: string[] = ["a", "b", "c"];

type IPerson = {
	name: string;
	age?: number;
};
let PersonArray: IPerson[] = [{ name: "jack" }, { name: "jane", age: 32 }];
