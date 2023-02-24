function longestConsec(strArr: string[], k: number) {
	const length = strArr.length
	if (length === 0) return ''
	if (k > length) return ''
	if (k <= 0) return ''

	const strMap: Map<string, number> = new Map()

	strArr.forEach((value) => strMap.set(value, value.length))

	const strLengthTuple = Object.entries(Object.fromEntries(strMap))
	const strLengthTupleSorted = strLengthTuple.sort((a, b) => b[1] - a[1])

	let longestConsecStr = ''
	for (let i = 0; i < k; i += 1) {
		longestConsecStr += strLengthTupleSorted[i][0]
	}

	return longestConsecStr
}

export { longestConsec }
