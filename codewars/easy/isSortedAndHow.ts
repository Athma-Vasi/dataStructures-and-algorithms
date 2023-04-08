function isSortedAndHow(array: number[]) {
	const arrayStringified = JSON.stringify(array)
	let clone: number[] = [...array]
	const ascending = JSON.stringify(clone.sort((a, b) => a - b))
	clone = [...array]
	const descending = JSON.stringify(clone.sort((a, b) => b - a))

	return arrayStringified === ascending
		? 'yes, ascending'
		: arrayStringified === descending
		? 'yes, descending'
		: 'no'
}

export { isSortedAndHow }
