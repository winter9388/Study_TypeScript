export const range = (from: number, to: number): number[] =>
	from < to ? [from, ...range(from + 1, to)] : [];

// console.log(range(1, 5));
