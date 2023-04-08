function watchPyramidFromTheSide(chars: string | null): string | null {
	if (chars === null || chars === '') return chars

	const length = chars?.length ?? Infinity
	const baseLength = length * 2 - 1

	const sidePyramid: string[] = []
	let levels = 0
	let levelLength = baseLength
	let padding = 0

	while (levels < length) {
		let string = chars[levels].repeat(levelLength)
		string = `${' '.repeat(padding)}${string}${' '.repeat(padding)}`

		sidePyramid.unshift(string)

		levels += 1
		levelLength -= 2
		padding += 1
	}

	return sidePyramid.join('\n')
}

function watchPyramidFromAbove(chars: string | null): string | null {
	if (chars === null || chars === '') return chars

	const length = chars?.length ?? Infinity
	const baseLength = length * 2 - 1

	const abovePyramid: string[] = []
	let strLength = baseLength
	let levels = 0

	while (levels < length) {
		let string = chars[levels].repeat(strLength)

		let strPadStart = ''
		for (let i = 0; i < levels; i += 1) strPadStart += chars[i]

		let strPadEnd = ''
		for (let i = levels - 1; i >= 0; i -= 1) strPadEnd += chars[i]

		string = `${strPadStart}${string}${strPadEnd}`
		abovePyramid.push(string)

		levels += 1
		strLength -= 2
	}
	const tempPyramid = [...abovePyramid]

	return abovePyramid
		.reduceRight((acc: string[], curr, idx) => {
			idx === length - 1 ? acc : acc.push(curr)

			return acc
		}, tempPyramid)
		.join('\n')
}

function countVisibleCharactersOfThePyramid(chars: string | null): number {
	if (chars === null || chars === '') return -1

	const length = chars?.length ?? Infinity
	return (length * 2 - 1) ** 2
}

function countAllCharactersOfThePyramid(chars: string | null): number {
	if (chars === null || chars === '') return -1

	const length = chars?.length ?? Infinity
	const baseLength = length * 2 - 1

	let allStonesCount = 0
	let levelLength = baseLength

	for (let i = 0; i < chars.length; i += 1) {
		allStonesCount += levelLength * levelLength

		levelLength -= 2
	}

	return allStonesCount
}

export {
	watchPyramidFromAbove,
	watchPyramidFromTheSide,
	countAllCharactersOfThePyramid,
	countVisibleCharactersOfThePyramid,
}
