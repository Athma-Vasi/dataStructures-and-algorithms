function bubbleSortAsc(array: number[]) {
	const clone = [...array]
	const length = clone.length
	let swapped = true

	while (swapped) {
		swapped = false
		for (let i = 0; i < length - 1; i += 1) {
			if (clone[i] > clone[i + 1]) {
				;[clone[i], clone[i + 1]] = [clone[i + 1], clone[i]]
				swapped = true
			}
		}
	}
	return clone
}

// TIME COMPLEXITY
//  worst: O(n^2)
//  avg: O(n^2)
//  best: O(n)

//  SPACE COMPLEXITY
//  worst: O(1)

const testArr = [5, 4, 6, 7, 3, 8, 2, 9, 1]
// console.log(bubbleSortAsc(testArr))

function bubbleSort2(list: number[]) {
	if (!Array.isArray(list)) throw new TypeError('Must be an array!')
	const length = list.length
	if (length < 2) return list
	const array = [...list]

	let swapped = true

	while (swapped) {
		swapped = false

		for (let i = 0; i < length - 1; i += 1) {
			if (array[i] > array[i + 1]) {
				;[array[i], array[i + 1]] = [array[i + 1], array[i]]
				swapped = true
			}
		}
	}

	return array
}

// console.log(bubbleSort2(testArr))

function bubbleSort3(arr: number[]) {
	if (!Array.isArray(arr)) throw new TypeError('Must be an array')
	const length = arr.length
	if (length < 2) return arr
	const array = [...arr]

	let swapped = true

	while (swapped) {
		swapped = false

		for (let i = 0; i < length - 1; i += 1) {
			if (typeof array[i] !== 'number')
				throw new TypeError(`Element: ${array[i]} at index: ${i} is not a number
			!`)

			if (array[i] > array[i + 1]) {
				;[array[i], array[i + 1]] = [array[i + 1], array[i]]
				swapped = true
			}
		}
	}

	return array
}

console.log(bubbleSort3(testArr))
