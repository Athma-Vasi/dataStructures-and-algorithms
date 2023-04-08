function isIsogram(str: string): boolean {
	if (str === '') return true

	const strArr = str.toLowerCase().split('')
	let count = 0

	for (const char of str.toLowerCase()) {
		strArr.forEach((str) => {
			char === str ? (count += 1) : count
		})
	}

	return count > strArr.length ? false : true
}

export { isIsogram }
