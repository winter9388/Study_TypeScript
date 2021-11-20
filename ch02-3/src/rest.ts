// 잔여 연산자 & 전개 연산자 - 사용되는 위치에 따라 변함

// 잔여 연산자 (rest)
let address: any = {
	country: "Korea",
	city: "Seoul",
	address1: "Gangnam-gu",
	address2: "Sinsa-dong 123-456",
	address3: "789 street, 2 Floor ABC building",
};
const { country, city, ...detail } = address;
console.log(detail);
// {
//   address1: 'Gangnam-gu',
//   address2: 'Sinsa-dong 123-456',
//   address3: '789 street, 2 Floor ABC building'
// }

// 전개 연산자 (spread operator) - '...' 연산자가 비구조화 할당문이 아닌곳에서 사용될때 '전개 연산자'
let coord = { ...{ x: 0 }, ...{ y: 0 } };
console.log(coord); // { x: 0, y: 0 }
