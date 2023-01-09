function digitize(n: number): number[] {
	return n
		.toString()
		.split('')
		.reduceRight((acc: number[], curr) => {
			acc.push(Number(curr))
			return acc
		}, [])
}

export { digitize }
