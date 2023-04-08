function specialNumbers(n: number) {
	const specialNumber = '012345'
	const boolArr: boolean[] = []

	n.toString()
		.split('')
		.forEach((num) =>
			specialNumber.includes(num) ? boolArr.push(true) : boolArr.push(false)
		)

	return boolArr.includes(false) ? 'NOT!!' : 'Special!!'
}

export { specialNumbers }
