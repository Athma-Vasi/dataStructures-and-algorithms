function lengthOfMissingArr(arrays: unknown[][]) {
	const checkEmpty = arrays.map((arr) => (arr.length === 0 ? true : false))
	if (checkEmpty.includes(true)) return 0

	const lengthArr = arrays.map((arr) => arr.length).sort((a, b) => a - b)

	let result = 0
	for (let i = 1; i < lengthArr.length; i += 1) {
		lengthArr[i] - lengthArr[i - 1] !== 1 ? (result = lengthArr[i] - 1) : lengthArr
	}

	return result
}

export { lengthOfMissingArr }
