import { range } from "./range"; // 범용 함수 제작 하여 사용 - 선언형 프로그래밍
import { fold } from "./fold"; // 범용 함수 제작 하여 사용 - 선언형 프로그래밍
import { filter } from "./filter"; // 범용 함수 제작 하여 사용 - 선언형 프로그래밍

let numbers: number[] = range(1, 100 + 1);
const isOdd = (n: number): boolean => n % 2 != 0;
let result = fold(filter(numbers, isOdd), (result, value) => result + value, 0);
console.log(result); //2500
