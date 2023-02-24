function firstNonConsecutive(arr: number[]): null | number {
	const length = arr.length

	if (length === 0) return null
	if (length === 1) return null

	let isConsecutive = true
	let firstNonConsecutive = 0
	let countConsecutives = 0

	for (let i = 1; i < length; i += 1) {
		if (arr[i] - arr[i - 1] !== 1) isConsecutive = false
		else {
			isConsecutive = true
			countConsecutives += 1
		}

		if (!isConsecutive) {
			firstNonConsecutive = arr[i]
			break
		}
	}

	return countConsecutives === length - 1 ? null : firstNonConsecutive
}

export { firstNonConsecutive }
