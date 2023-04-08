function hiddenCubicNumbers(s: string) {
	let temp = ''
	let numStr = s
		.split('')
		.reduce((acc: string[], curr, idx) => {
			if (!Number.isNaN(Number(curr))) {
				temp += curr
				idx === s.split('').length - 1 ? acc.push(temp) : acc
			} else {
				acc.push(temp)
				temp = ''
			}

			return acc
		}, [])
		.filter((char) => char !== '' && char !== ' ')
		.reduce((acc: string[], curr) => {
			const whitespaceRemoved = curr
				.split('')
				.reduce((acc, curr) => (curr === ' ' ? acc : (acc += curr)), '')
			acc.push(whitespaceRemoved)

			return acc
		}, [])
		//need to split str of length > 3 into str of lengths == 3
		.reduce((acc: string[], curr, idx) => {
			if (curr.length === 3) acc.push(curr)
			else {
				let curr_ = curr
				let index = 0
				while (curr_.length > 3) {
					acc.push(curr_.slice(index, (index += 3)))
					curr_ = curr_.slice(index)
					index += 3
				}

				if (curr_.length < 3) acc.push(curr_)
			}

			return acc
		}, [])
	// 	.reduce((acc, curr) => {
	// 		const strTotal = curr
	// 			.split('')
	// 			.reduce((acc, curr) => (curr !== ' ' ? (acc += Number(curr) ** 3) : acc), 0)

	// 		strTotal === Number(curr) ? (acc += curr + ' ') : acc

	// 		return acc
	// 	}, '')

	// return numStr === '' ? 'Unlucky' : (numStr += 'Lucky')

	return numStr
}

console.log(
	hiddenCubicNumbers(
		'&z371 upon 407298a --- dreary, ###100.153 I thought, 9926315strong and weary -127&() 1'
	)
)

//123_456_789


