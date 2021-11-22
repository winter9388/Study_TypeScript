import { IPerson, ICompany } from "./IPerson_ICompany";

let jack: IPerson = { name: "jack", age: 32 },
	jane: IPerson = { name: "jane", age: 32 };

let apple: ICompany = { name: "apple Computer", age: 43 },
	ms: ICompany = { name: "Microsoft", age: 44 };

console.log(jack, jane, apple, ms);

// 비구조화(destructuring) - 구조화 되있던 데이터를 분해 하는것
let name = jack.name;
let age = jack.age;
// ES6이 비구조화
// let {name, age } = jack

console.log(name, age);
