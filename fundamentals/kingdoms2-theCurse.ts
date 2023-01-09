function translateSpeech(speech: string, vocabulary: string[]) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'

	return speech.split(' ').reduce((acc: string[], curr) => {
		const onlyLetterIdxs = curr
			.split('')
			.reduce((acc_: [string, number][], curr_, idx_) => {
				alphabet.includes(curr_) ? acc_.push([curr_, idx_]) : acc

				return acc_
			}, [])

		const boolArr: boolean[] = []

		vocabulary.forEach((vocab) => {
			onlyLetterIdxs.forEach(([letter, idx]) => {
				vocab.split('').forEach((char, i) => {
					letter === char && idx === i ? boolArr.push(true) : boolArr.push(false)
				})

				const numOfMatches = boolArr.reduce(
					(acc, curr) => (curr === true ? (acc += 1) : acc),
					0
				)

				//changed from let to const
				const temp = curr.split('')
				numOfMatches === onlyLetterIdxs.length
					? vocab.split('').forEach((char, idx) => (temp[idx] = char))
					: vocab

				numOfMatches === onlyLetterIdxs.length ? acc.push(temp.join('')) : acc
			})
		})

		return acc
	}, [])
}

export { translateSpeech }
