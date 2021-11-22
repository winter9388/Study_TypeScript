// 매서드 체인

// 제이쿼리(jQuery) - 객체의 매서드를 이어서 계속 호출하는 방식의 코드 작성이 가능하다.
// $("#p1").css("color","red").slideup(2000).slideDown(2000);

// 타입스크립트로 구현 - 매서드가 항상 this를 반환하게 함.
class calculator {
	constructor(public value: number = 0) {}
	add(value: number) {
		this.value += value;
		return this; // 메서드 체이닝을 위해 해당 객체 인스턴스를 리턴
	}
	multiply(value: number) {
		this.value *= value;
		return this; // 메서드 체이닝을 위해 해당 객체 인스턴스를 리턴
	}
}

// 제이쿼리 스타일로 구현
let calc2 = new calculator();
let result2 = calc2.add(1).add(2).multiply(3).multiply(4).value;
console.log(result2); //(0 + 1 + 2) * 3 * 4 = 36
