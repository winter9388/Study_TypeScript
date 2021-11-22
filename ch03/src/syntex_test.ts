let ai: {
	name: string;
	age: number;
	etc?: boolean;
} = { name: "jack", age: 32, etc: true };

function printMe(me: { name: string; age: number; etc?: boolean }) {
	console.log(
		me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
	);
}

printMe(ai);
