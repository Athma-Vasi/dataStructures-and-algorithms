function findUniqueNum(arr: number[]) {
	const arrMap: Map<number, number> = new Map()

	arr.forEach((value) => {
		let mapVal = arrMap.get(value) ?? 0
		arrMap.set(value, (mapVal += 1))
	})

	let unique = 0
	arrMap.forEach((value, key) => {
		if (value === 1) unique = key
	})

	return unique
}

export { findUniqueNum }
