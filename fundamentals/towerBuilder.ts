function towerBuilder(nFloors: number) {
	if (nFloors === 1) return ['*']

	const numArr: number[] = []
	for (let i = 1; i <= nFloors; i += 1) numArr.push(i)

	return numArr.reduce((acc: string[], curr, idx) => {
		const str = '*'
		const emptyStr = ' '
		const totalSpace = nFloors * 2 - 1
		let spacePerFloor = 0

		curr + idx < totalSpace ? (spacePerFloor = totalSpace - (curr + idx)) : spacePerFloor

		const halfSpace = spacePerFloor / 2
		const tempArr: string[] = []

		tempArr.push(emptyStr.repeat(halfSpace))
		tempArr.push(str.repeat(curr + idx))
		tempArr.push(emptyStr.repeat(halfSpace))

		acc.push(tempArr.reduce((acc, curr) => (acc += curr), ''))

		return acc
	}, [])
}

export { towerBuilder }
