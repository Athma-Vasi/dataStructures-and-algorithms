function maximumSubarraySum(arr: number[]) {
	if (arr.length === 0) return 0
	const [negativeNumsCount, positiveNumsCount] = arr.reduce(
		(acc: [number, number], curr) => {
			curr < 0 ? (acc[0] += 1) : curr >= 0 ? (acc[1] += 1) : acc

			return acc
		},
		[0, 0]
	)
	if (negativeNumsCount === arr.length) return 0
	if (positiveNumsCount === arr.length) return arr.reduce((acc, curr) => (acc += curr), 0)

	let windowSize = 2
	let tempSum = 0
	let currWindow = arr.reduce((acc: number[], curr, idx) => {
		idx < windowSize ? acc.push(curr) : acc

		return acc
	}, [])
	let newLastElemIdx = 0
	let cloneArr = [...arr]
	const finalSums: number[] = []

	while (windowSize <= arr.length) {
		while (newLastElemIdx < arr.length) {
			tempSum = currWindow.reduce((acc, curr) => (acc += curr), 0)
			finalSums.push(tempSum)

			const prevFirstElem = currWindow[0]
			const prevFirstElemIdx = cloneArr.findIndex((elem) => elem === prevFirstElem)
			cloneArr[prevFirstElemIdx] = Infinity
			newLastElemIdx = prevFirstElemIdx + windowSize
			const newLastElem = arr[newLastElemIdx]

			currWindow.shift()
			currWindow.push(newLastElem)
		}

		windowSize += 1
		currWindow = arr.reduce((acc: number[], curr, idx) => {
			idx < windowSize ? acc.push(curr) : acc

			return acc
		}, [])
		cloneArr = [...arr]
		newLastElemIdx = 0
	}

	return Math.max(...finalSums)
}

export { maximumSubarraySum }
