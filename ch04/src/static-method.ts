//정적 매서드 - 클래스를 인스턴스화 하지 않고(클래스의 객체를 생성하지 않고) 정적 매서드를 호출 할수 있다.

class C {
	static whoAreYou(): string {
		return `I'm class C`;
	}
}

class D {
	static whoAreYou(): string {
		return `I'm class D`;
	}
}

// class C 와 D 를 객체화 하지 않고 내장함수 whoAreYou를 호출 하는 모습.
console.log(C.whoAreYou());
console.log(D.whoAreYou());
