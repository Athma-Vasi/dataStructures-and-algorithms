function summation(num: number) {
	const temp: number[] = []
	for (let i = 1; i <= num; i += 1) {
		temp.push(i)
	}

	return temp.reduce((acc, curr) => {
		acc += curr
		return acc
	}, 0)
}

export { summation }
