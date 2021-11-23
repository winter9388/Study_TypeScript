// filter(callvack:(value:T, index?:T):boolean):T[]

// filter 를 이용해 배열을 반으로 나누는 코드
import { range } from "../05-2/range";

const array: number[] = range(1, 10 + 1);
const half = array.length / 2;

let belowHalf: number[] = array.filter((v, index) => index < half); // 배열의 값이 아닌 인덱스를 기준으로 반으로 분할
let overHalf: number[] = array.filter((v, index) => index >= half);
console.log(belowHalf, overHalf);
