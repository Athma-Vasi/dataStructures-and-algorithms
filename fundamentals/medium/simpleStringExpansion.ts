//fails random tests with unknown args

function simpleStringExpansion(str: string) {
	if (str === '') return ''

	let duplNumsRemovedStr = ''
	let i = 0
	let j = i + 1
	let isOverflowing = false
	// while loop removes consecutive numbers
	while (j < str.length && !isOverflowing) {
		// if two consecutive idx contain numbers, do not add to ...Str
		if (!Number.isNaN(Number(str[i])) && !Number.isNaN(Number(str[j]))) {
			i + 2 < str.length ? (i += 2) : (isOverflowing = true)
			j + 2 < str.length ? (j += 2) : (isOverflowing = true)
		} // if first is a number and second is a string, add both to ...Str
		else if (!Number.isNaN(Number(str[i])) && Number.isNaN(Number(str[j]))) {
			duplNumsRemovedStr += str[i]
			duplNumsRemovedStr += str[j]

			i + 2 < str.length ? (i += 2) : (isOverflowing = true)
			if (j + 2 < str.length) j += 2
			else {
				isOverflowing = true
				//grabs the last trailing char
				str[j + 1] === undefined ? duplNumsRemovedStr : (duplNumsRemovedStr += str[j + 1])
			}
		} // if first and second are not numbers, add both to ...Str
		else {
			duplNumsRemovedStr += str[i]
			duplNumsRemovedStr += str[j]

			i + 2 < str.length ? (i += 2) : (isOverflowing = true)
			if (j + 2 < str.length) j += 2
			else {
				isOverflowing = true
				//grabs the last trailing char
				str[j + 1] === undefined ? duplNumsRemovedStr : (duplNumsRemovedStr += str[j + 1])
			}
		}
	}

	let count = 1
	return duplNumsRemovedStr.split('').reduce((acc, curr) => {
		if (!Number.isNaN(Number(curr[0]))) {
			count = Number(curr[0])
		} else {
			const str = curr[0] as string
			acc += str.repeat(count)
		}

		return acc
	}, '')
}

export { simpleStringExpansion }

// console.log(simpleStringExpansion('3abc')) // "aaabbbccc"
// console.log(simpleStringExpansion('3d332f2a')) // "dddffaa"
// console.log(simpleStringExpansion('3d3gh')) // "dddggghhh"
// console.log(simpleStringExpansion('3ab2c')) // "aaabbbcc"
// console.log(simpleStringExpansion('abcde')) // "abcde"
// console.log(simpleStringExpansion('a2bcde')) // "abbccddee"
// console.log(simpleStringExpansion('9nf3u'))
