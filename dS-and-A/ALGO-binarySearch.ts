function binarySearch<T>(arr: T[], elem: T, low = 0, high = arr.length - 1): T | number {
	while (high >= low) {
		const mid = Math.floor(low + (high - low) / 2)

		if (arr[mid] === elem) return mid

		elem < arr[mid] ? (high = mid - 1) : (low = mid + 1)
	}
	return -1
}

const testArr = [5, 4, 6, 7, 3, 8, 2, 9, 1]
console.log(binarySearch(testArr, 3))

// TIME COMPLEXITY
//  worst: O(log n)
//  best: O(1)

// SPACE COMPLEXITY
//  iter: O(1)
//  recur: tailCallOptim ? O(1) : O(log n)
