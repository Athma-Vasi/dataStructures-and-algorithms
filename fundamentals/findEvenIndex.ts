function findEvenIndex(arr: number[]) {
	if (arr.length === 0) return 0
	if (arr.slice(1).reduce((acc, curr) => (acc += curr), 0) === 0) return 0

	let evenIndex = 0
	let isConsecutive = true

	for (let i = 1; i < arr.length; i += 1) {
		const leftSide = arr.slice(0, i)
		const rightSide = arr.slice(i + 1)

		const leftSum = leftSide.reduce((acc, curr) => (acc += curr), 0)
		const rightSum = rightSide.reduce((acc, curr) => (acc += curr), 0)

		if (leftSum === rightSum) {
			evenIndex = i
			isConsecutive = false
		}
	}
	return isConsecutive ? -1 : evenIndex
}

export { findEvenIndex }
