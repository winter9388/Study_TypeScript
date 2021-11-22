// 매개변수에 비구조화 할당문 이용하기.

type Person2 = { name: string; age: number };

const printPerson = ({ name, age }: Person2): void =>
	console.log(`name: ${name}, age: ${age}`);

printPerson({ name: "jack", age: 10 });
