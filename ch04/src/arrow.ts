// 객체를 반환 하는 애로우 펑션

// const makePerson = (name: string, age: number = 10) => {name, age}
// {}를 객체가 아닌 복합 실행문으로 해석함

// 제대로된 예 - ({})형식으로 중괄호를 괄호오 묶어주어 객체를 반환 한다.
const makePerson3 = (name: string, age: number = 10) => ({ name, age });
console.log(makePerson3("jack"));
