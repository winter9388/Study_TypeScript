// filter(callvack:(value:T, index?:T):boolean):T[]

import { range } from "../05-2/range";

const array: number[] = range(1, 10 + 1);

let odds: number[] = array.filter((val) => val % 2 != 0);
let evens: number[] = array.filter((val) => val % 2 == 0);
console.log(odds, evens);
