//type 키워드로 병칠 만들기

// type 새로운 타입 = 기존 타입
// stringNumberFunc 라는 새로운 타입을 정의
type stringNumberFunc = (string, number) => void;
let f: stringNumberFunc = function (a: string, b: number): void {};
let g: stringNumberFunc = function (c: string, d: number): void {};
