// for ..in 문
// for (변수 in 객체) {}

let names = ["jack", "jane", "steve"];

for (let index in names) {
	const name = names[index];
	console.log(`[${index}]:${name}`);
}

// for ..of 문
// for(let 변수 of 객체){}
// fon in 문은 배열의 인덱스 값을 대상으로 순회, for of 문은 배열의 아이템값을 대상으로 순화
// 아이템값만 필요할때는 for in 문 보다 간결하게 만들수 있다.
for (let name of ["jack", "jane", "steve"]) {
	console.log(name);
}
