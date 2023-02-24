function sumDigPow(a: number, b: number) {
	const eurekaArr: number[] = []
	let first = a

	while (first < b) {
		const firstArr = first.toString().split('')
		const sumDigsPow = firstArr.reduce(
			(acc, curr, idx) => (acc += Number(curr) ** (idx + 1)),
			0
		)
		first === sumDigsPow ? eurekaArr.push(sumDigsPow) : eurekaArr
		first += 1
	}

	return eurekaArr
}

export { sumDigPow }
