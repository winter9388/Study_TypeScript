// 콜백 함수
// 일등 함수 기능을 제공하는 언어에서 함수는 '함수 표현식'이라는 일종의 값이다.
// 즉, 변수에 담을수 있는 값이며, '함수 표현식'을 함수의 매개 변수에 담을수 있다.
// 이처럼 매개 변수 로써 작동하는 함수를 '콜백 함수' 라고 한다.

const init = (callback: () => void): void => {
	console.log("default initialization finished");
	callback();
	console.log("all initialization finished");
};

init(() => console.log("custom initialization finished"));
