function whatIsBetween(a: number, b: number) {
	const tempArr: number[] = []

	for (let i = a; i <= b; i += 1) tempArr.push(i)

	return tempArr
}

export { whatIsBetween }
