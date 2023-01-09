// max sum sub array problem
function slidingWindow(arr: number[], num: number) {
	//  arr.length < window size (num) ? null
	if (arr.length < num) return null

	//  highest amount of consec numbers
	let maxSum = 0
	//  temp amount of consec numbers - to compare
	let tempSum = 0

	//  loop over array {num} times and save their total amount in {maxSum}
	for (let i = 0; i < num; i += 1) maxSum += arr[i]

	//  initialize {tempSum} to {maxSum}
	tempSum = maxSum

	//  loop over array n times
	for (let i = num; i < arr.length; i += 1) {
		//  add the next num in the array and remove the first one
		tempSum = tempSum - arr[i - num] + arr[i]
		//  save the largest number between {maxSum} and {tempSum} in maxSum
		maxSum = Math.max(maxSum, tempSum)
	}

	return maxSum
}

function longestUniqueSubstring(s: string) {
	//  creating a set to store last positions of occurence
	const seen = new Map()
	let maxLength = 0

	//  starting the initial point of window to index 0
	let start = 0

	for (let end = 0; end < s.length; end += 1) {
		//  checking if we have already seen the element or not
		if (seen.has(s[end])) {
			//  if we have seen the element, move the start pointer to position after
			//  the last occurence
			start = Math.max(start, seen.get(s[end]) + 1)
		}
		//  updating the last seen value of the character
		seen.set(s[end], end)
		maxLength = Math.max(maxLength, end - start + 1)
	}

	return maxLength
}

function findMaxSumSubArr(arr: number[], k: number) {
	let maxValue = Number.MIN_SAFE_INTEGER
	let currentRunningSum = 0

	for (let i = 0; i < arr.length; i += 1) {
		currentRunningSum += arr[i]

		if (i >= k - 1) {
			maxValue = Math.max(maxValue, currentRunningSum)
			currentRunningSum -= arr[i - (k - 1)]
		}
	}

	return maxValue
}

const testArr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0]
console.log(findMaxSumSubArr(testArr, 3))

function findSmallestSumSubArray(arr: number[], targetSum: number) {
	let windowStart = 0
	let minWindowSize = Number.MAX_SAFE_INTEGER
	let currentWindowSum = 0

	for (let windowEnd = 0; windowEnd < arr.length; windowEnd += 1) {
		currentWindowSum += arr[windowEnd]

		while (currentWindowSum >= targetSum) {
			minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1)
			currentWindowSum -= arr[windowStart]
			windowStart += 1
		}
	}

	return minWindowSize
}

const testArr1 = [4, 2, 2, 7, 8, 1, 2, 8, 10]
console.log(findSmallestSumSubArray(testArr1, 8))

function findMaxSumSubArr1(arr: number[], k: number) {
	if (!Array.isArray(arr)) throw new TypeError('Must be an array!')
	if (k === 0) return 0
	if (k === 1) return Math.max(...arr)
	const length = arr.length

	let maxSum = Number.MIN_SAFE_INTEGER
	let currentRunningSum = 0

	for (let i = 0; i < length; i += 1) {
		if (typeof arr[i] !== 'number')
			throw new TypeError(`Element: ${arr[i]} at index: ${i} is not a number!`)

		currentRunningSum += arr[i]

		if (i >= k - 1) {
			maxSum = Math.max(currentRunningSum, maxSum)
			currentRunningSum -= arr[i - (k - 1)]
		}
	}

	return maxSum
}

console.log(findMaxSumSubArr1(testArr, 3))
