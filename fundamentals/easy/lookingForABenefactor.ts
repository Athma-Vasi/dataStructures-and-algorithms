function lookingForABenefactor(arr: number[], newAvg: number) {
	if (newAvg < 0) return -1

	let oldAvg = arr.reduce((acc, curr) => (acc += curr), 0) / arr.length
	let newNum = 1
	let tempAvg = oldAvg

	while (tempAvg < newAvg) {
		tempAvg = (arr.reduce((acc, curr) => (acc += curr), 0) + newNum) / (arr.length + 1)
		newNum += 1
	}

	if (newNum - 1 === 0) throw new Error('Expected New Average is too low')

	return newNum - 1
}

export { lookingForABenefactor }
