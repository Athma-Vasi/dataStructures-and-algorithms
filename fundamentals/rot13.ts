function rot13(message: string) {
	const alphabetLower = 'abcdefghijklmnopqrstuvwxyz'
	const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

	const [charLowerKVPosition, positionKVCharLower] = alphabetLower.split('').reduce(
		(acc: [Map<string, number>, Map<number, string>], char, idx) => {
			acc[0].set(char, idx + 1)
			acc[1].set(idx + 1, char)

			return acc
		},
		[new Map(), new Map()]
	)

	const [charUpperKVPosition, positionKVCharUpper] = alphabetUpper.split('').reduce(
		(acc: [Map<string, number>, Map<number, string>], char, idx) => {
			acc[0].set(char, idx + 1)
			acc[1].set(idx + 1, char)

			return acc
		},
		[new Map(), new Map()]
	)

	return message
		.split('')
		.reduce((acc: string[], char) => {
			if (char === char.toLowerCase()) {
				const charPosition = charLowerKVPosition.get(char) ?? Infinity

				if (charPosition === Infinity) acc.push(char)
				else {
					let newCharPosition = charPosition + 13
					newCharPosition = newCharPosition > 26 ? newCharPosition - 26 : newCharPosition

					const newChar = positionKVCharLower.get(newCharPosition) ?? ''
					acc.push(newChar)
				}
			} else {
				const charPosition = charUpperKVPosition.get(char) ?? Infinity

				if (charPosition === Infinity) acc.push(char)
				else {
					let newCharPosition = charPosition + 13
					newCharPosition = newCharPosition > 26 ? newCharPosition - 26 : newCharPosition

					const newChar = positionKVCharUpper.get(newCharPosition) ?? ''
					acc.push(newChar)
				}
			}

			return acc
		}, [])
		.join('')
}

export { rot13 }
