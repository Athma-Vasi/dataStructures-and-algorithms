let myObj = {
	a: 123,
	b: 'bob',
	c: true,
	[Symbol.iterator]: function () {
		let counter = -1

		return {
			next: function () {
				counter += 1

				switch (counter) {
					case 0: {
						return { value: myObj.c, done: false }
					}
					case 1: {
						return { value: myObj.b, done: false }
					}
					case 2: {
						return { value: myObj.a, done: false }
					}

					default: {
						return { value: undefined, done: true }
					}
				}
			},
		}
	},
}

// for (const prop of myObj) console.log(prop)

//generator example
function makeLooper(str: string) {
	const funcGenerator = (function* () {
		while (true) for (const char of str) yield char
	})()
	return () => funcGenerator.next().value
}

function findMaxSumSubArray(arr: number[], k: number) {
	// initialize maxVal with the absolute min value
	let maxValue = Number.MIN_SAFE_INTEGER
	let currentRunningSum = 0

	// loop through array adding elems to currentRunningSum
	for (let i = 0; i < arr.length; i += 1) {
		currentRunningSum += arr[i]

		// if the window end is greater than size k
		if (i >= k - 1) {
			// find the max
			maxValue = Math.max(maxValue, currentRunningSum)

			// decrement the leftmost window element
			currentRunningSum -= arr[i - (k - 1)]
		}
	}

	return maxValue
}

// console.log(findMaxSumSubArray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3))

function findSmallestSumSubArray(arr: number[], targetSum: number) {
	let windowStart = 0
	let currentWindowSum = 0
	let minWindowSize = Number.MAX_SAFE_INTEGER

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
