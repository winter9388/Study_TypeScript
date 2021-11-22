// 전개 연산자

let part1 = { name: "jane" },
	part2 = { age: 22 },
	part3 = { city: "Seoul", country: "Kr" };

// 전개 연산자를 통해 part1,2,3의 객체를 통합(merge) 함
let merge = { ...part1, ...part2, ...part3 };
console.log(merge); // { name: 'jane', age: 22, city: 'Seoul', country: 'Kr' }
