// interface에 선택 속성이 있는 경우의 예

interface IAgeable {
	age?: number;
}

function getAge(o: IAgeable) {
	return o != undefined && o.age ? o.age : 0; // undefined와 선택자 확인 여부 코드
}

console.log(getAge(undefined));
console.log(getAge(null));
console.log(getAge({ age: 32 }));
