// 프로그래밍 언어에 따라 문자열을 문자들의 배열로 간주하는 언어가 있다.
// 타입스크립트는 문자 타입이 없고 문자영의 내용 또한 변경할수 없다.
// 때문에 문자열을 변환 하기위해서는 문자영을 배열로 전환 하여 가공하여야 한다.

// Split 클래스의 split 매서드
// split(구분자: string): string[] - 구분자 = 문자를 쪼개는 기준

const split = (str: string, delim: string = ""): string[] => str.split(delim);
console.log(split("hello"), split("h_e_l_l_o", "_"));

let test = "hi";
console.log(test.split(""));

// string[]타입의 배열을 다시 string타입으로 변환
// Array클래스의 join매서드를 이용
// join(구분자:string):string

const join = (strArray: string[], delim: string = ""): string =>
	strArray.join(delim);
console.log(
	join(["h", "e", "l", "l", "o"]),
	join(["h", "e", "l", "l", "o"], "_")
);
