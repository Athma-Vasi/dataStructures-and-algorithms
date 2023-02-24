//works for the first sample test only
//dont feel like refactoring cuz its bananas with O(m ^ n) time complexity

function theCurseNormal(speech: string, vocabulary: string[]) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	const vocabLetterIdxs: Array<[string, number][]> = vocabulary.map((vocab) =>
		vocab.split('').map((char, idx) => [char, idx])
	)

	const speechLetterIdxs: [string, number][] = speech
		.split(' ')
		.reduce((acc: [string, number][][], curr) => {
			const wordLettersIdxs = curr
				.split('')
				.reduce((acc_: [string, number][], curr_, idx_) => {
					alphabet.includes(curr_) ? acc_.push([curr_, idx_]) : acc_

					return acc_
				}, [])

			acc.push(wordLettersIdxs)

			return acc
		}, [])
		.flatMap((x) => x)

	// return speechLetterIdxs

	const nonLetters = speech.split(' ').reduce((acc: string[], curr) => {
		curr
			.split('')
			.forEach((char) =>
				alphabet.includes(char) ? acc : char === '*' ? acc : acc.push(char)
			)

		return acc
	}, [])

	// return nonLetters

	const boolArr = vocabLetterIdxs.reduce(
		(acc: boolean[][][], vocab: [string, number][]) => {
			const temp2: boolean[][] = []

			speechLetterIdxs.forEach((speechIdx) => {
				const temp: boolean[] = []

				vocab.forEach((charIdx) =>
					charIdx[0] === speechIdx[0] && charIdx[1] === speechIdx[1]
						? temp.push(true)
						: temp.push(false)
				)

				temp2.push(temp)
			})

			acc.push(temp2)

			return acc
		},
		[]
	)

	// return boolArr

	let cloneBoolArr: Array<boolean[][] | null> = JSON.parse(JSON.stringify(boolArr))

	let incr = 1
	let vocabIdxWithOneMatch: number
	let _speechIdxWithOneMatch: number
	const resultArr: string[] = []

	while (cloneBoolArr.length > 0) {
		vocabIdxWithOneMatch = boolArr.reduce((acc: number, curr: boolean[][], idx) => {
			const flatBoolArr = curr.flatMap((x) => x)
			const trueFiltered = flatBoolArr.filter((bool) => bool === true)
			trueFiltered.length === incr ? (acc = idx) : acc

			return acc
		}, 0)

		_speechIdxWithOneMatch = boolArr.reduce((acc: number, curr: boolean[][], idx) => {
			curr.forEach((val, i) => {
				idx === vocabIdxWithOneMatch ? (val.includes(true) ? (acc = i) : acc) : val
			})

			return acc
		}, 0)

		resultArr.push(vocabulary[vocabIdxWithOneMatch])

		cloneBoolArr[vocabIdxWithOneMatch] = null
		cloneBoolArr = cloneBoolArr.filter((bools) => bools !== null)
		incr += 1
	}

	return resultArr
		.reduce((acc: string[], curr, idx) => {
			let temp = ''
			temp += curr
			temp += nonLetters[idx]

			acc.push(temp)

			return acc
		}, [])
		.join(' ')
}

// console.log(theCurseNormal('a**? *c*. **e,', ['ace', 'acd', 'abd']))

console.log(theCurseNormal('m** ***e **s l*****', ['name', 'myy', 'legion', 'iss']))
