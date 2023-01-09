function greatDigitalConflict(letters: string, numbers: string) {
	if (letters === '' || numbers === '') return 'Peace'

	const alphabet = 'abcdefghijklmnopqrstuvwxyz'

	const [alphabetPower, powerAlphabet] = alphabet.split('').reduce(
		(acc: [Map<string, number>, Map<number, string>], curr, idx) => {
			acc[0].set(curr, idx + 1)
			acc[1].set(idx + 1, curr)

			return acc
		},
		[new Map(), new Map()]
	)

	let reducedLetters: unknown[] = letters.split('')
	let reducedNumbers: unknown[] = numbers.split('')
	const n = 0
	let l = reducedLetters.length - 1

	while (reducedLetters.length > 0 && reducedNumbers.length > 0) {
		const lastLetter = reducedLetters[l] as string
		const lastLetterPower = alphabetPower.get(lastLetter) ?? 0
		const nextToLastLetter = l - 1 === null ? null : (reducedLetters[l - 1] as string)
		const nextToLastLetterPower =
			nextToLastLetter === null ? null : alphabetPower.get(nextToLastLetter) ?? 0

		const currentNumber = reducedNumbers[n]
		const currentNumberPower = Number(currentNumber)

		const attackOnNumber = currentNumberPower - lastLetterPower
		const attackOnLastLetter = lastLetterPower - currentNumberPower
		const attackOnNextToLastLetter =
			nextToLastLetterPower === null ? null : nextToLastLetterPower - currentNumberPower

		attackOnNumber < 0 || attackOnNumber === 0
			? (reducedNumbers[n] = null)
			: (reducedNumbers[n] = attackOnNumber.toString())
		reducedNumbers = reducedNumbers.filter((num) => num !== null)

		attackOnLastLetter < 0 || attackOnLastLetter === 0
			? (reducedLetters[l] = null)
			: (reducedLetters[l] = powerAlphabet.get(attackOnLastLetter))

		if (attackOnNextToLastLetter !== null) {
			attackOnNextToLastLetter < 0 || attackOnNextToLastLetter === 0
				? (reducedLetters[l - 1] = null)
				: (reducedLetters[l - 1] = powerAlphabet.get(attackOnNextToLastLetter))
		}

		reducedLetters = reducedLetters.filter((letter) => letter !== null)

		l = reducedLetters.length - 1
	}

	return reducedLetters.length === 0 && reducedNumbers.length === 0
		? 'Draw'
		: reducedLetters.length === 0
		? reducedNumbers.join('')
		: reducedLetters.join('')
}

export { greatDigitalConflict }
