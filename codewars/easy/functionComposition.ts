function compose(...fns: Array<(_: number) => number>) {
	return function (arg: number) {
		return fns.reduceRight(
			(acc: number, fn: (_: number) => number) => (fn ? fn(acc) : acc),
			arg
		)
	}
}

function addOne(x: number) {
	return x + 1
}

function multTwo(y: number) {
	return y * 2
}

export { compose, addOne, multTwo }
