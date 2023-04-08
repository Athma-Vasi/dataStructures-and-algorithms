//fails a random test with unknown args

function playingWithPassphrases(s: string, n: number) {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const [alphabetMap, invertedAlphabetMap] = alphabet.split('').reduce(
		(acc: [Map<string, number>, Map<number, string>], curr, idx) => {
			acc[0].set(curr, idx + 1)
			acc[1].set(idx + 1, curr)

			return acc
		},
		[new Map(), new Map()]
	)

	return s
		.split(' ')
		.reduce((acc: string[], curr) => {
			curr.split('').forEach((val) => {
				let temp = 0
				if (Number.isNaN(Number(val))) {
					if (!alphabet.includes(val)) acc.push(val)
					else {
						temp = alphabetMap.get(val) ?? Infinity
						const incrementedScore = temp + n > 26 ? n - 1 : temp + n

						const shiftedAlphabet = invertedAlphabetMap.get(incrementedScore) ?? ''
						acc.push(shiftedAlphabet)
					}
				} else {
					let num = Number(val)
					num = Math.abs(num - 9)
					acc.push(num.toString())
				}
			})
			acc.push(' ')

			return acc
		}, [])
		.slice(0, -1)

		.reduce((acc: string[], curr, idx) => {
			if (Number.isNaN(Number(curr))) {
				if (!alphabet.includes(curr)) acc.push(curr)
				else idx % 2 === 0 ? acc.push(curr.toUpperCase()) : acc.push(curr.toLowerCase())
			} else acc.push(curr)

			return acc
		}, [])
		.reverse()
		.join('')
}

export { playingWithPassphrases }
