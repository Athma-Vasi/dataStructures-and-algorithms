function removeTheMinimum(numbers: number[]) {
	if (numbers.length === 0) return []

	const clonedNums = [...numbers]

	const minNum = Math.min(...clonedNums)

	let isFirstMinNum = true
	return clonedNums.reduce((acc: number[], curr) => {
		if (curr === minNum && !isFirstMinNum) acc.push(curr)
		else if (curr === minNum && isFirstMinNum) isFirstMinNum = false
		else if (curr !== minNum) acc.push(curr)

		return acc
	}, [])
}

export { removeTheMinimum }
