function findShortestWord(s: string) {
	const lengthArr = s.split(' ').reduce((acc: number[], curr) => {
		acc.push(curr.length)

		return acc
	}, [])

	return Math.min(...lengthArr)
}

export { findShortestWord }
