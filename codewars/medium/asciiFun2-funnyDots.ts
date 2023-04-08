function funnyDots(columns: number, rows: number) {
	const resultsArrs: string[] = []
	let resultArr: string[] = []

	for (let i = 0; i < rows; i += 1) {
		resultArr.push('+---'.repeat(columns))
		resultArr.push('+')
		resultsArrs.push(resultArr.join(''))
		resultArr = []

		resultArr.push('| o '.repeat(columns))
		resultArr.push('|')
		resultsArrs.push(resultArr.join(''))
		resultArr = []
	}

	resultArr.push('+---'.repeat(columns))
	resultArr.push('+')
	resultsArrs.push(resultArr.join(''))

	return resultsArrs.join('\n')
}

export { funnyDots }
