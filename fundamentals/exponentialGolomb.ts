function golombDecode(str: string): number[] {
	let strArr: unknown[] = str.split('')
	const result: number[] = []

	while (strArr.length > 0) {
		const idxOfFirstOne = strArr.findIndex((char) => char === '1')
		const endIndex = idxOfFirstOne * 2 + 1

		const binaryStr = strArr.slice(idxOfFirstOne, endIndex).join('')
		const num = binaryToDecimal(binaryStr) - 1
		result.push(num)

		for (let i = 0; i < endIndex; i += 1) strArr[i] = null

		strArr = strArr.filter((elem) => elem !== null)
	}

	return result
}

function binaryToDecimal(n: string) {
	const nStrArr = n.split('')
	let result = 0

	let j = 0
	for (let i = nStrArr.length - 1; i >= 0; i -= 1) {
		result += Number(nStrArr[i]) * 2 ** Number(j)
		j += 1
	}

	return result
}

export { golombDecode }
