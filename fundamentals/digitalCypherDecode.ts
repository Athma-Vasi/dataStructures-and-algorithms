function digitalCypherDecode(code: number[], n: number) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'

	const codeAlphabet = alphabet
		.split('')
		.reduce((acc: Map<number, string>, curr, idx) => {
			acc.set(idx + 1, curr)

			return acc
		}, new Map())

	const length = code.length
	const cypher = n.toString()
	const cypherArr: number[] = []
	let i = 0

	while (cypherArr.length < length) {
		cypherArr.push(Number(cypher[i]))
		i = i === cypher.length - 1 ? 0 : i + 1
	}

	const decodedChars = code.map((num, idx) => {
		const shiftedCode: number = num - cypherArr[idx]
		return codeAlphabet.get(shiftedCode)
	})

	return decodedChars.join('')
}

export { digitalCypherDecode }
