// 실행문 방식 몸통 - CPU에서 계산이후 자동 호출 하지 않음 , return을 이용해 호출해야한다.
const arrow1 = (a: number, b: number): number => {
	return a + b;
};
// 표현식 문 방식 몸통
const arrow2 = (a: number, b: number): number => a + b;
