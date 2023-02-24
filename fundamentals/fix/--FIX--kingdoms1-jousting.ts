function kingdomsJousting(
	listField: string[],
	vKnightLeft: number,
	vKnightRight: number
) {
	if (vKnightLeft === 0 && vKnightRight === 0) return listField

	const [startIdxKnightLeft, startIdxKnightRight] = listField.reduce(
		(acc, curr) => {
			curr
				.split('')
				.forEach((char, idx) =>
					char === '>' ? (acc[0] = idx) : char === '<' ? (acc[1] = idx) : acc
				)

			return acc
		},
		[0, 0]
	)

	let currIdxKnightLeft = startIdxKnightLeft
	let currIdxKnightRight = startIdxKnightRight

	while (
		currIdxKnightLeft + 1 !== currIdxKnightRight &&
		currIdxKnightLeft < currIdxKnightRight
	) {
		currIdxKnightLeft += vKnightLeft
		currIdxKnightRight -= vKnightRight
	}

	const lengthHalfArena = listField[0].length
	currIdxKnightLeft =
		lengthHalfArena % 2 === 0 ? currIdxKnightLeft + 1 : currIdxKnightLeft
	// return [currIdxKnightLeft, currIdxKnightRight, lengthHalfArena]
	const arenaKnightLeft = ' '.repeat(lengthHalfArena)
	const arenaKnightRight = ' '.repeat(lengthHalfArena)

	const endPositionKnightLeft = arenaKnightLeft
		.split('')
		.reduce((acc: string[], curr, idx) => {
			idx === currIdxKnightLeft - 2
				? acc.push('$')
				: idx === currIdxKnightLeft - 1
				? acc.push('-')
				: idx === currIdxKnightLeft
				? acc.push('>')
				: acc.push(curr)

			return acc
		}, [])
		.join('')

	const endPositionKnightRight = arenaKnightRight
		.split('')
		.reduceRight((acc: string[], curr, idx) => {
			idx === currIdxKnightRight - 2
				? acc.push('P')
				: idx === currIdxKnightRight - 1
				? acc.push('-')
				: idx === currIdxKnightRight
				? acc.push('<')
				: acc.push(curr)

			return acc
		}, [])
		.join('')

	return [endPositionKnightLeft, endPositionKnightRight]
}

console.log(kingdomsJousting(['$->    ', '    <-P'], 1, 1))
console.log([' $->   ', '   <-P '])

console.log(kingdomsJousting(['$->     ', '     <-P'], 1, 1))
//  [ '  $->   ', '   <-P  ' ]
console.log(['  $->   ', '   <-P  '])

console.log(kingdomsJousting(['$->    ', '    <-P'], 3, 3))
console.log(['   $-> ', ' <-P   '])
