// fails random test with size=10_000 elems (> 12s)

function largestSumContiguousSeq(arr: number[]) {
	if (arr.length === 0) return 0
	const boolArr = arr.map((num) => num < 0)
	// if there are no negative numbers
	if (!boolArr.includes(true)) return arr.reduce((acc, curr) => (acc += curr), 0)
	// if there are no positive numbers
	if (!boolArr.includes(false)) return 0

	let windowSize = 2
	let idx = windowSize
	let currentWindow = [arr[0], arr[1]]
	const sums: number[] = []

	while (windowSize <= arr.length) {
		while (idx < arr.length) {
			const tempSum = currentWindow.reduce((acc, curr) => (acc += curr), 0)
			sums.push(tempSum)
			currentWindow.shift()
			currentWindow.push(arr[idx])
			idx += 1
		}
		windowSize += 1
		idx = windowSize

		currentWindow = arr.reduce((acc: number[], curr, idx_) => {
			idx_ < windowSize ? acc.push(curr) : acc

			return acc
		}, [])
	}

	return Math.max(...sums)
}

// console.log(largestSumContiguousSeq([-1, -2, -3]))
// console.log(largestSumContiguousSeq([]))
// console.log(largestSumContiguousSeq([1, 2, 3]))
console.log(largestSumContiguousSeq([31, -41, 59, 26, -53, 58, 97, -93, -23, 84]))

const
