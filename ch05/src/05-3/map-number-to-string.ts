// map(callback:(value:T, index?:number):Q):Q[]
// map 은 입력 타입과 다른 새로운 배열을 만들수 있다.

// number[]타입을 string[]타입 배열로 가공
import { range } from "../05-2/range";

let names: string[] = range(1, 5 + 1).map((val, index) => `[${index}]:${val}`);
console.log(names);
