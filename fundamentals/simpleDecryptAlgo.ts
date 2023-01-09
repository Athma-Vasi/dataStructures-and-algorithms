function simpleDecryptAlgo(encryption: string) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'

	const sanitizedEncrStr = encryption
		.split('')
		.reduce((acc, curr) => (alphabet.includes(curr) ? (acc += curr) : acc), '')

	const sanitizedEncrStrMap = sanitizedEncrStr
		.split('')
		.reduce((acc: Map<string, number>, curr) => {
			let hasCount = acc.get(curr) ?? 0
			acc.set(curr, (hasCount += 1))

			return acc
		}, new Map())

	return alphabet
		.split('')
		.reduce((acc, curr) => (acc += sanitizedEncrStrMap.get(curr) ?? 0), '')
}

export { simpleDecryptAlgo }
