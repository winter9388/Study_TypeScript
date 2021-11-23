// map(callback:(value:T, index?:number):Q):Q[]
// map 은 입력 타입과 다른 새로운 배열을 만들수 있다.

import { range } from "../05-2/range";

let squares: number[] = range(1, 5 + 1).map((val: number) => val * val);
console.log(squares);
