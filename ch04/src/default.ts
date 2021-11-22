// 디폴트 매개변수
// (매개변수: 타입 = 매개변수 기본값)

type Person = { name: string; age: number };

// age에 해당하는 값을 전달 받지 못할시 기본값 10 반환
const makePerson = (name: string, age: number = 10): Person => {
	const person = { name: name, age: age };
	return person;
};
console.log(makePerson("jack")); // age에 기본값 10 반환
console.log(makePerson("jack", 33));
