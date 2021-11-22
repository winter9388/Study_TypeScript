// undefined를 고려한 코드 예
interface INameable {
	name: string;
}
function getName(o: INameable) {
	return o != undefined ? o.name : "unknown name"; // undefined 확인 여부 코드
}

let n = getName(undefined);
console.log(n);
console.log(getName({ name: "jack" }));
