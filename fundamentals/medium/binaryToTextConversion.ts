function binaryToTextConversion(binary: string) {
	if (binary === '') return ''

	let binaryStr = ''
	const binStrArr = binary.split('').reduce((acc: string[], binary, idx) => {
		if (idx > 0 && (idx + 1) % 8 === 0) {
			binaryStr += binary
			acc.push(binaryStr)
			binaryStr = ''
		} else binaryStr += binary

		return acc
	}, [])

	return binStrArr.reduce((phrase, binaryStr) => {
		const codeForChar = binaryStr.split('').reduceRight((acc, binary, idx) => {
			const shiftedIdx = 7 - idx
			Number(binary) === 0 ? binary : (acc += 2 ** shiftedIdx)

			return acc
		}, 0)

		phrase += String.fromCodePoint(codeForChar)

		return phrase
	}, '')
}

export { binaryToTextConversion }
