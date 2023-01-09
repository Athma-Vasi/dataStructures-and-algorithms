//fails unknown random tests; passes all sample tests

function possibilitiesArray(nums: number[]) {
	if (nums.length === 0) return false
	if (nums.length === 1) return true

	const length = nums.length - 1

	const zeroToLength: number[] = []
	for (let i = 0; i <= length; i += 1) {
		zeroToLength.push(i)
	}

	const boolArr = nums.reduce((acc: boolean[], curr) => {
		zeroToLength.includes(curr) ? acc.push(true) : acc.push(false)

		return acc
	}, [])

	return boolArr.includes(false) ? false : true
}

export { possibilitiesArray }
