// 제네릭 방식 타입

const arrayLength = <T>(array: T[]): number => array.length;
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0;

let numArray2: number[] = [1, 2, 3];
let strArray2: string[] = ["Hello", "World"];

type IPerson2 = {
	name: string;
	age?: number;
};
let personArray: IPerson2[] = [{ name: "jack" }, { name: "jane", age: 32 }];

console.log(
	arrayLength(numArray2),
	arrayLength(strArray2),
	arrayLength(personArray),
	isEmpty([]),
	isEmpty([1])
);
