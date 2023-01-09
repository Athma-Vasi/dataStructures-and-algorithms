function humanYearsCatYearsDogYears(humanYears: number) {
	const tempArr: [number, number, number] = [0, 0, 0]
	tempArr[0] = humanYears

	for (let i = 1; i <= humanYears; i += 1) {
		tempArr[1] =
			i === 1 ? (tempArr[1] += 15) : i === 2 ? (tempArr[1] += 9) : (tempArr[1] += 4)

		tempArr[2] =
			i === 1 ? (tempArr[2] += 15) : i === 2 ? (tempArr[2] += 9) : (tempArr[2] += 5)
	}

	return tempArr
}

export { humanYearsCatYearsDogYears }
