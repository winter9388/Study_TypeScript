// 색인 키와 값으로 객체 만들기

const makeObject = (key, value) => ({ [key]: value });
console.log(makeObject("name", "jack")); //{name: 'jack'}
console.log(makeObject("firstName", "jane")); //{firstName: 'jane'}

// 타입스크립트 에서는 {[key]:value} 형태를 '색인 기능 타입(indexable type)' 이라고 한다.
type KeyValuetype = {
	[key: string]: string;
};

const makeObject2 = (key: string, value: string): KeyValuetype => ({
	[key]: value,
});
console.log(makeObject2("name", "jack")); //{ name: 'jack' }
console.log(makeObject2("firstName", "jane")); //{ firstName: 'jane' }
