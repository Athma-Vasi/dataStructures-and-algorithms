//fails a very large number array test - execution times out ( > 12s )

function countContiguousDistinct(k: number, arr: number[]) {
	let windowEndPosition = k - 1
	let numOfSlidingWindows = arr.length - k + 1
	const numOfDistinctElemsPerWindow: number[] = []
	const tempWindow = arr.reduce((acc: number[], curr, idx) => {
		idx < k ? acc.push(curr) : acc

		return acc
	}, [])

	while (numOfSlidingWindows > 0) {
		numOfDistinctElemsPerWindow.push(new Set(tempWindow).size)
		tempWindow.shift()
		windowEndPosition += 1
		tempWindow.push(arr[windowEndPosition])
		numOfSlidingWindows -= 1
	}

	return numOfDistinctElemsPerWindow
}

console.log(countContiguousDistinct(4, [1, 2, 1, 3, 4, 2, 3]))
console.log(countContiguousDistinct(2, [1, 2, 1, 3, 4, 2, 3, 3]))
console.log(countContiguousDistinct(8, [1, 2, 1, 3, 4, 2, 3, 3]))
