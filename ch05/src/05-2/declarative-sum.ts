// 선언형 프로그래밍
// - 문제를 푸는데 필요한 모든 데이터 배열에 저장
// - 입력 데이터 배열을 가공해 출력 데이터 배열 생성
// - 출력 데이터 배열에 담긴 아이템 출력

import { range } from "./range";
import { fold } from "./fold";

// 입력 데이터 생성
let numbers: number[] = range(1, 100 + 1);
// 입력 데이터 가공 - 선언형 방식은 범용으로 구현된 함수를 재사용 하면서 문제를 해결
let result = fold(numbers, (result, value) => result + value, 0);
console.log(result); // 5050
