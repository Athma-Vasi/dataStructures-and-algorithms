function insertionSortAsc(arr: number[]) {
	const array = [...arr]
	const length = array.length
	if (length < 2) return array

	for (let i = 1; i < length; i += 1) {
		const currentItem = array[i]

		let j = i - 1

		while (j >= 0 && array[j] > currentItem) {
			array[j + 1] = array[j]
			j -= 1
		}

		array[j + 1] = currentItem
	}

	return array
}

//	TIME COMPLEXITY
//	worst: O(n^2) comparisons; O(n^2) swaps
//	best: O(n) comparisons, O(1) swaps

//	SPACE COMPLEXITY
//	original implementation: O(1) -> sorted in place
//  above implementation: O(n) -> copy is made and copy is sorted in place

const testArr = [5, 4, 6, 7, 3, 8, 2, 9, 1]
// console.log(insertionSortAsc(testArr))

function insertionSort2(list: number[]) {
	if (!Array.isArray(list)) throw new TypeError('Must be an array!')
	const length = list.length
	if (length < 2) return list
	const array = [...list]

	for (let i = 1; i < length; i += 1) {
		const currentElem = array[i]

		if (typeof currentElem !== 'number')
			throw new TypeError(`Elem: ${currentElem} at index: ${i} is not a number!`)

		let j: number
		for (j = i - 1; j >= 0 && array[j] > currentElem; j -= 1) {
			array[j + 1] = array[j]
		}

		array[j + 1] = currentElem
	}

	return array
}

// console.log(insertionSort2(testArr))

function insertionSort3(arr: number[]) {
	if (!Array.isArray(arr)) throw new TypeError('Must be an array 😅')
	const length = arr.length
	if (length < 2) return arr
	const array = [...arr]

	for (let i = 1; i < length; i += 1) {
		const currentElem = array[i]
		if (typeof currentElem !== 'number')
			throw new TypeError(`Element: ${currentElem} at index: ${i} is not a number 😅`)

		let j: number
		for (j = i - 1; j >= 0 && arr[j] > currentElem; j -= 1) {
			array[j + 1] = array[j]
		}

		array[j + 1] = currentElem
	}

	return array
}

console.log(insertionSort3(testArr))
