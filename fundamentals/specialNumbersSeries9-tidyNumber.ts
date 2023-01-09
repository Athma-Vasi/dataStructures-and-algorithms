function tidyNumber(num: number) {
	const boolArr: boolean[] = []
	const numToStrArr = num.toString().split('')

	for (let i = 1; i < numToStrArr.length; i += 1) {
		Number(numToStrArr[i]) - Number(numToStrArr[i - 1]) >= 0
			? boolArr.push(true)
			: boolArr.push(false)
	}

	return boolArr.includes(false) ? false : true
}

export { tidyNumber }
