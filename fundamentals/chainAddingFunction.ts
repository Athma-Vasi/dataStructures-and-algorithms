// function accum(...args: number[]): number {
// 	return args.reduce((acc, curr) => (acc += curr), 0)
// }

// function curry(func: (...args: number[]) => number) {
// 	return function curried(this: unknown, ...args: number[]) {
// 		if (args.length >= func.length) func.apply(this, args)
// 		else
// 			return function (this: unknown, ...args2: number[]) {
// 				return curried.apply(this, args.concat(args2))
// 			}
// 	}
// }

// const add = curry(accum)

function add(x: number) {
	const calc = (y: number) => add(x + y)
	calc.valueOf = () => x
	return calc
}

console.log(add(1)(2)(3)(4))
