function readAbacus(abacus: string) {
	const abacusArr = abacus.split('\n')
	const upperAbacus = abacusArr[0]

	// iterates through the top layer and if char is '*' ? idx + 1 is added to fivesArr
	// and else char is ' ' ? idx + 1 is added to emptyFivesArr
	// why? allows deciding whether to add 5 plus num or num alone
	const [fivesArr, emptyFivesArr] = upperAbacus.split('').reduce(
		(acc, curr, idx) => {
			curr === ' ' ? (acc[0] += idx + 1) && (acc[1] += 0) : (acc[1] += idx + 1)

			return acc
		},
		['', '']
	)

	const fourthLayer = abacusArr[3]
	// if this layer (just below the dashed layer) is empty, produces '987654321'
	// why? for comparison. If this layer is empty, and the bottom layer is not,
	// and the fivesArr is also empty, then total value is 0
	const decimalEmptyPositions4thLayer = fourthLayer
		.split('')
		.reduce((acc, curr, idx) => (curr === ' ' ? (acc += 9 - idx) : acc), '')

	return (
		abacusArr
			// iterating from the bottom layer upwards
			.reduceRight((acc: number[], layer, layerIdx) => {
				// only checking up to layer below dashed layer
				if (layerIdx > 3) {
					// each char in layer is checked starting from left to right
					layer.split('').forEach((char, charIdx) => {
						// if the char is empty, find the idx of empty position (decimalEmptyPosition)
						// and find the idx of currently referenced layer (layerEmptyPosition)
						if (char === ' ') {
							const decimalEmptyPosition = charIdx + 1
							// minus 3 because if say, empty char is in bottommost layer,
							// then we need to subtract 3 to get four, which is the numerical value
							const layerEmptyPosition = layerIdx - 3

							// for each empty position idx: check whether fives layer contains '*'
							// and if true, add 5 to layerEmptyPosition else add layerEmptyPosition
							// ex: if in bottommost layer, then 5 + 4, if 2nd bottommost then 5 + 3
							// and if fives layer does not contain '*', then just add layerEmptyPosition
							// each char idx across a layer denotes decimal place and is multiplied
							switch (decimalEmptyPosition) {
								case 9: {
									fivesArr.includes(`${decimalEmptyPosition}`)
										? acc.push(layerEmptyPosition + 5)
										: acc.push(layerEmptyPosition)
									break
								}
								case 8: {
									fivesArr.includes(`${decimalEmptyPosition}`)
										? acc.push((layerEmptyPosition + 5) * 10)
										: acc.push(layerEmptyPosition * 10)
									break
								}
								case 7: {
									fivesArr.includes(`${decimalEmptyPosition}`)
										? acc.push((layerEmptyPosition + 5) * 100)
										: acc.push(layerEmptyPosition * 100)
									break
								}
								case 6: {
									fivesArr.includes(`${decimalEmptyPosition}`)
										? acc.push((layerEmptyPosition + 5) * 1000)
										: acc.push(layerEmptyPosition * 1000)
									break
								}
								case 5: {
									fivesArr.includes(`${decimalEmptyPosition}`)
										? acc.push((layerEmptyPosition + 5) * 10_000)
										: acc.push(layerEmptyPosition * 10_000)
									break
								}
								case 4: {
									fivesArr.includes(`${decimalEmptyPosition}`)
										? acc.push((layerEmptyPosition + 5) * 100_000)
										: acc.push(layerEmptyPosition * 100_000)
									break
								}
								case 3: {
									fivesArr.includes(`${decimalEmptyPosition}`)
										? acc.push((layerEmptyPosition + 5) * 1_000_000)
										: acc.push(layerEmptyPosition * 1_000_000)
									break
								}
								case 2: {
									fivesArr.includes(`${decimalEmptyPosition}`)
										? acc.push((layerEmptyPosition + 5) * 10_000_000)
										: acc.push(layerEmptyPosition * 10_000_000)
									break
								}
								case 1: {
									fivesArr.includes(`${decimalEmptyPosition}`)
										? acc.push((layerEmptyPosition + 5) * 100_000_000)
										: acc.push(layerEmptyPosition * 100_000_000)
									break
								}
								default: {
									throw new Error(
										`default code block reached with decimalEmptyPosition: ${decimalEmptyPosition} 
               				and layerEmptyPosition: ${layerEmptyPosition}`
									)
								}
							}
						}
						// if char is not empty
						else {
							// only need to check the bottommost layer
							if (layerIdx === 7) {
								// position of non-empty char in bottommost layer subtracted from 9
								// to align with the switch logic
								const decimalFilledPosition = 9 - charIdx

								// in the layer just below dashed line, if current (non-empty) charIdx
								// position in the 4th layer is also empty
								// 		and if fivesArr layer position of curr charIdx is also empty
								//		then the value must be 0
								//		else push corresponding decimal place value
								switch (decimalFilledPosition) {
									case 9: {
										if (
											decimalEmptyPositions4thLayer.includes(`${decimalFilledPosition}`)
										) {
											decimalFilledPosition === 10 - Number(emptyFivesArr[charIdx])
												? acc.push(0)
												: acc.push(500_000_000)
										}
										break
									}
									case 8: {
										if (
											decimalEmptyPositions4thLayer.includes(`${decimalFilledPosition}`)
										) {
											decimalFilledPosition === 10 - Number(emptyFivesArr[charIdx])
												? acc.push(0)
												: acc.push(50_000_000)
										}
										break
									}
									case 7: {
										if (
											decimalEmptyPositions4thLayer.includes(`${decimalFilledPosition}`)
										) {
											decimalFilledPosition === 10 - Number(emptyFivesArr[charIdx])
												? acc.push(0)
												: acc.push(5_000_000)
										}
										break
									}
									case 6: {
										if (
											decimalEmptyPositions4thLayer.includes(`${decimalFilledPosition}`)
										) {
											decimalFilledPosition === 10 - Number(emptyFivesArr[charIdx])
												? acc.push(0)
												: acc.push(500_000)
										}
										break
									}
									case 5: {
										if (
											decimalEmptyPositions4thLayer.includes(`${decimalFilledPosition}`)
										) {
											decimalFilledPosition === 10 - Number(emptyFivesArr[charIdx])
												? acc.push(0)
												: acc.push(50_000)
										}
										break
									}
									case 4: {
										if (
											decimalEmptyPositions4thLayer.includes(`${decimalFilledPosition}`)
										) {
											decimalFilledPosition === 10 - Number(emptyFivesArr[charIdx])
												? acc.push(0)
												: acc.push(5000)
										}
										break
									}
									case 3: {
										if (
											decimalEmptyPositions4thLayer.includes(`${decimalFilledPosition}`)
										) {
											decimalFilledPosition === 10 - Number(emptyFivesArr[charIdx])
												? acc.push(0)
												: acc.push(500)
										}
										break
									}
									case 2: {
										if (
											decimalEmptyPositions4thLayer.includes(`${decimalFilledPosition}`)
										) {
											decimalFilledPosition === 10 - Number(emptyFivesArr[charIdx])
												? acc.push(0)
												: acc.push(50)
										}
										break
									}
									case 1: {
										if (
											decimalEmptyPositions4thLayer.includes(`${decimalFilledPosition}`)
										) {
											decimalFilledPosition === 10 - Number(emptyFivesArr[charIdx])
												? acc.push(0)
												: acc.push(5)
										}
										break
									}
									default: {
										throw new Error(
											`default code block reached with decimalEmptyPosition: ${decimalFilledPosition}`
										)
									}
								}
							}
						}
					})
				}

				return acc
			}, [])
			// sum the values to get the final result
			.reduce((acc, curr) => (acc += curr), 0)
	)
}

/*
console.log(
	readAbacus(
		'*********\n         \n---------\n        *\n*********\n*********\n******** \n*********'
	)
) // 3

console.log(
	readAbacus(
		'******** \n        *\n---------\n        *\n*********\n******** \n*********\n*********'
	)
) // 7

console.log(
	readAbacus(
		'*********\n         \n---------\n       **\n*******  \n*********\n*********\n*********'
	)
) // 11

console.log(
	readAbacus(
		'****** **\n      *  \n---------\n     ** *\n***** ***\n****** **\n******** \n*********'
	)
) // 1703
*/

function createAbacus(n: number) {
	const nStr = n.toString()
	const nLength = nStr.length

	// if char in nStr is greater than four, then the charIdx position in the
	// top most layer must be empty
	// subtracting idx from nLength is to align with .reduceRight idxs
	const upperAbacusIdxs = nStr
		.split('')
		.reduceRight(
			(acc, curr, idx) => (Number(curr) > 4 ? (acc += nLength - 1 - idx) : acc),
			''
		)

	// .from and .map are used to create an iterable of length 9, and to avoid for loop
	// if upperAbacusIdxs includes idx position of reduceRight,
	// then insert an ' ' in the corresponding upperTopLayer idx
	// and insert a '*' in the corresponding upperMidLayer idx
	const [upperTopLayer, upperMidLayer, upperBottomLayer] = Array.from({ length: 9 })
		.map((_) => '')
		.reduceRight(
			(acc: string[][], _, idx) => {
				if (upperAbacusIdxs.includes(`${8 - idx}`)) {
					acc[0].unshift(' ')
					acc[1].unshift('*')
				} else {
					acc[0].unshift('*')
					acc[1].unshift(' ')
				}
				acc[2].push('-')

				return acc
			},
			[[], [], []]
		)

	// finished top 3 layers are pushed into final result arr
	const finalAbacusArr: string[] = []
	finalAbacusArr.push(upperTopLayer.join(''))
	finalAbacusArr.push(upperMidLayer.join(''))
	finalAbacusArr.push(upperBottomLayer.join(''))

	// rest of the layers are built up in one pass, hence length: 1
	// this way is cleaner for me ... ¯\_(ツ)_/¯
	const [
		lowerBottomLayer,
		lower2ndBottomLayer,
		lower3rdBottomLayer,
		lower4thBottomLayer,
		lower5thBottomLayer,
	] = Array.from({ length: 1 })
		.map((_) => '')
		.reduce(
			(layers: string[][], _) => {
				// each value can be either n or n + 5 depending on the corresponding idx
				// position in the fives layer being empty or filled
				// bottommost layer for '4' and '9', 2ndMostBottomLayer for '3' and '8' and so on

				// idxs of n and n + 5 in the original nStr are found and subtracted from 10
				// to properly position it in the layer being built up
				if (nStr.includes('4') || nStr.includes('9')) {
					const [idxsOfFour, idxsOfNine] = nStr.split('').reduce(
						(acc, numStr, numStrIdx) => {
							numStr === '4' ? (acc[0] += numStrIdx + (10 - nLength)) : acc
							numStr === '9' ? (acc[1] += numStrIdx + (10 - nLength)) : acc

							return acc
						},
						['', '']
					)

					// an iterable of length 9 is created and used to push ' ' if
					// nStr contains either n or n + 5 else '*', in the proper position
					Array.from({ length: 9 })
						.map((_) => '')
						.forEach((_, valIdx) => {
							idxsOfFour.includes(`${valIdx + 1}`) || idxsOfNine.includes(`${valIdx + 1}`)
								? layers[0].push(' ')
								: layers[0].push('*')
						})
				}
				// if, in this case, nStr does not contain '4' or '9'
				// then the bottommost layer is filled with '*'
				else {
					layers[0].push(
						Array.from({ length: 9 })
							.map((_) => '*')
							.join('')
					)
				}

				// see comments above ...nStr.includes('4')... for most of the rest of 'if's
				if (nStr.includes('3') || nStr.includes('8')) {
					const [idxsOfThree, idxsOfEight] = nStr.split('').reduce(
						(acc, numStr, numStrIdx) => {
							numStr === '3' ? (acc[0] += numStrIdx + (10 - nLength)) : acc
							numStr === '8' ? (acc[1] += numStrIdx + (10 - nLength)) : acc

							return acc
						},
						['', '']
					)

					Array.from({ length: 9 })
						.map((_) => '')
						.forEach((_, valIdx) => {
							idxsOfThree.includes(`${valIdx + 1}`) ||
							idxsOfEight.includes(`${valIdx + 1}`)
								? layers[1].push(' ')
								: layers[1].push('*')
						})
				} else {
					layers[1].push(
						Array.from({ length: 9 })
							.map((_) => '*')
							.join('')
					)
				}

				if (nStr.includes('2') || nStr.includes('7')) {
					const [idxsOfTwo, idxsOfSeven] = nStr.split('').reduce(
						(acc, numStr, numStrIdx) => {
							numStr === '2' ? (acc[0] += numStrIdx + (10 - nLength)) : acc
							numStr === '7' ? (acc[1] += numStrIdx + (10 - nLength)) : acc

							return acc
						},
						['', '']
					)

					Array.from({ length: 9 })
						.map((_) => '')
						.forEach((_, valIdx) => {
							idxsOfTwo.includes(`${valIdx + 1}`) || idxsOfSeven.includes(`${valIdx + 1}`)
								? layers[2].push(' ')
								: layers[2].push('*')
						})
				} else {
					layers[2].push(
						Array.from({ length: 9 })
							.map((_) => '*')
							.join('')
					)
				}

				if (nStr.includes('1') || nStr.includes('6')) {
					const [idxsOfOne, idxsOfSix] = nStr.split('').reduce(
						(acc, numStr, numStrIdx) => {
							numStr === '1' ? (acc[0] += numStrIdx + (10 - nLength)) : acc
							numStr === '6' ? (acc[1] += numStrIdx + (10 - nLength)) : acc

							return acc
						},
						['', '']
					)

					Array.from({ length: 9 })
						.map((_) => '')
						.forEach((_, valIdx) => {
							idxsOfOne.includes(`${valIdx + 1}`) || idxsOfSix.includes(`${valIdx + 1}`)
								? layers[3].push(' ')
								: layers[3].push('*')
						})
				} else {
					layers[3].push(
						Array.from({ length: 9 })
							.map((_) => '*')
							.join('')
					)
				}
				// slightly different logic for '0' and '5'
				// if '0' or '5' is in nStr ? push ' ', else '*'
				// padded with ' ' to bring length to 9
				if (nStr.includes('0') || nStr.includes('5')) {
					const tempStr = nStr
						.split('')
						.reduce((acc: string[], curr) => {
							curr === '0' || curr === '5' ? acc.push(' ') : acc.push('*')

							return acc
						}, [])
						.join('')
						.padStart(9, ' ')

					layers[4].push(tempStr)
				}
				// if '0' or '5' is not in nStr, then create a layer full of '*' and push
				else {
					layers[4].push(
						Array.from({ length: nLength })
							.map((_) => '*')
							.join('')
					)

					const tempStr = layers[4].join('').padStart(9, ' ')
					layers[4] = []
					layers[4].push(tempStr)
				}

				return layers
			},
			[[], [], [], [], []]
		)

	finalAbacusArr.push(lower5thBottomLayer.join(''))
	finalAbacusArr.push(lower4thBottomLayer.join(''))
	finalAbacusArr.push(lower3rdBottomLayer.join(''))
	finalAbacusArr.push(lower2ndBottomLayer.join(''))
	finalAbacusArr.push(lowerBottomLayer.join(''))

	return finalAbacusArr.join('\n')
}

// const three =
// 	'*********\n         \n---------\n        *\n*********\n*********\n******** \n*********'

// const seven =
// 	'******** \n        *\n---------\n        *\n*********\n******** \n*********\n*********'

// const eleven =
// 	'*********\n         \n---------\n       **\n*******  \n*********\n*********\n*********'

// const seventeenOhThree =
// 	'****** **\n      *  \n---------\n     ** *\n***** ***\n****** **\n******** \n*********'

// console.log(createAbacus(3) === three)
// console.log(createAbacus(7) === seven)
// console.log(createAbacus(11) === eleven)
// console.log(createAbacus(1703) === seventeenOhThree)

// // console.log(createAbacus(7))
// // console.log('\n\n')
// // console.log(seven)

// console.log(createAbacus(1703))
// console.log('\n\n')
// console.log(seventeenOhThree)

// console.log(createAbacus(5555))
// console.log(readAbacus(createAbacus(5555)))
// console.log('\n\n')
// console.log(createAbacus(990099))
// console.log(readAbacus(createAbacus(990099)))

// console.log(createAbacus(999_999_999))
// console.log(readAbacus(createAbacus(999999999)))

export { readAbacus, createAbacus }
