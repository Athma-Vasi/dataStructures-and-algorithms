function digitalCypherEncode(str: string, n: number) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	const alphabetsMap = alphabet
		.split('')
		.reduce((acc, curr, idx) => acc.set(curr, idx + 1), new Map())

	const nLength = n.toString().length

	let i = 1

	return str.split('').reduce((acc: number[], curr, idx) => {
		const wrap = idx - nLength * i
		i = wrap === 0 ? (i += 1) : i

		let temp = 0
		temp +=
			alphabetsMap.get(curr) +
			Number(n.toString()[idx >= nLength ? (wrap < 0 ? nLength + wrap : wrap) : idx])

		acc.push(temp)

		return acc
	}, [])
}

export { digitalCypherEncode }
