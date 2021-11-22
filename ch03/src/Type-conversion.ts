// 타입 변환 - (type conversion)

let person: object = { name: "jack", age: 32 };
// person.age; // object 타입은 name 속성을 갖지 않기때문에 오류가 발생
(<{ name: string }>person).name; // person 변수를 일시적으로 name속성이 있는 타입 ({name:strong}타입)으로 변환해 속성값을 얻게함

// 타입 단언 (type assertion) - 타입스트립트는 타입 변환이 아닌 타입 단언을 사용 (두가지 형태가 있음) ES5 구문이 아님
//(<타입>객체)
//(객체 as 타입)
// 예제 => type-assertion.ts
