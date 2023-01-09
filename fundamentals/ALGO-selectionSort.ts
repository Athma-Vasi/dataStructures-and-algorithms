function selectionSortAsc(array: number[]) {
	if (!Array.isArray(array)) throw new TypeError('Given input must be an array!')

	const items = [...array]
	const length = items.length

	for (let i = 0; i < length - 1; i += 1) {
		if (typeof items[i] !== 'number') throw new TypeError('An item is not a number!')

		//min holds the current minimum number position for each pass
		//i holds the initial min number
		let min = i

		for (let j = i + 1; j < length; j += 1) if (items[j] < items[min]) min = j

		if (min !== i) [items[i], items[min]] = [items[min], items[i]]
	}
	return items
}

export { selectionSortAsc }

//  TIME COMPLEXITY
//  worst: O(n^2)
//  avg: O(n^2)
//  best: O(n^2)

//  SPACE COMPLEXITY
//  worst: O(1)

const testArr = [5, 4, 6, 7, 3, 8, 2, 9, 1]
// console.log(selectionSortAsc(testArr))

function selectionSort2(list: number[]) {
	if (!Array.isArray(list)) throw new TypeError('Must be an array!')

	const length = list.length
	if (length < 2) return list
	const array = [...list]

	for (let i = 0; i < length - 1; i += 1) {
		if (typeof array[i] !== 'number')
			throw new TypeError(`Element ${array[i]} at index: ${i} is not a number!`)

		let min = i

		for (let j = i + 1; j < length; j += 1) if (array[j] < array[min]) min = j

		if (min !== i) [array[i], array[min]] = [array[min], array[i]]
	}

	return array
}

function selectionSort3(arr: number[]) {
	if (!Array.isArray(arr)) throw new TypeError('Must be an array!')
	const length = arr.length
	if (length < 2) return arr
	const array = [...arr]

	for (let i = 0; i < length - 1; i += 1) {
		if (typeof array[i] !== 'number')
			throw new TypeError(`Element: ${array[i]} at index: ${i} is not a number!`)

		let min = i

		for (let j = i + 1; j < length; j += 1) if (array[j] < array[min]) min = j

		if (min !== i) [array[i], array[min]] = [array[min], array[i]]
	}

	return array
}

console.log(selectionSort3(testArr))
