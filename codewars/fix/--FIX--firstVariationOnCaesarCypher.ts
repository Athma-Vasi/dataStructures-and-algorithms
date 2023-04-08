function movingShift(s: string, shift: number) {
	const alphabetLower = 'abcdefghijklmnopqrstuvwxyz'
	const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

	const [alphabetLowerCode, codeLowerAlphabet] = alphabetLower.split('').reduce(
		(acc: [Map<string, number>, Map<number, string>], curr, idx) => {
			acc[0].set(curr, idx + 1)
			acc[1].set(idx + 1, curr)

			return acc
		},
		[new Map(), new Map()]
	)

	const [alphabetUpperCode, codeUpperAlphabet] = alphabetUpper.split('').reduce(
		(acc: [Map<string, number>, Map<number, string>], curr, idx) => {
			acc[0].set(curr, idx + 1)
			acc[1].set(idx + 1, curr)

			return acc
		},
		[new Map(), new Map()]
	)

	// const spaceIdxs = s.split('').reduce((acc: number[], curr, idx) => {
	// 	curr === ' ' ? acc.push(idx + 1) : acc

	// 	return acc
	// }, [])

	let count = shift
	const solnArr = s.split(' ').reduce((acc: string[], curr) => {
		let word = ''

		curr.split('').forEach((char) => {
			if (alphabetLower.includes(char) || alphabetUpper.includes(char)) {
				if (char.toLowerCase() === char) {
					const preShiftCode = alphabetLowerCode.get(char) ?? 0
					let postShiftCode = preShiftCode + count
					postShiftCode =
						postShiftCode > 26
							? postShiftCode % 26 === 0
								? 26
								: postShiftCode % 26
							: postShiftCode
					const postShiftChar = codeLowerAlphabet.get(postShiftCode)

					word += postShiftChar
					count += 1
				} else {
					const preShiftCode = alphabetUpperCode.get(char) ?? 0
					let postShiftCode = preShiftCode + count
					postShiftCode =
						postShiftCode > 26
							? postShiftCode % 26 === 0
								? 26
								: postShiftCode % 26
							: postShiftCode
					const postShiftChar = codeUpperAlphabet.get(postShiftCode)

					word += postShiftChar
					count += 1
				}
			} else word += char
		})

		acc.push(word)
		count += 1

		return acc
	}, [])

	return solnArr

	//FIX - logic to split soln into even(words kept whole) lengths
	// const solnLength = solnArr.join(' ').length
}

function demovingShift(arr: string[], shift: number) {
	const alphabetLower = 'abcdefghijklmnopqrstuvwxyz'
	const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

	const [alphabetLowerCode, codeLowerAlphabet] = alphabetLower.split('').reduce(
		(acc: [Map<string, number>, Map<number, string>], curr, idx) => {
			acc[0].set(curr, idx + 1)
			acc[1].set(idx + 1, curr)

			return acc
		},
		[new Map(), new Map()]
	)

	const [alphabetUpperCode, codeUpperAlphabet] = alphabetUpper.split('').reduce(
		(acc: [Map<string, number>, Map<number, string>], curr, idx) => {
			acc[0].set(curr, idx + 1)
			acc[1].set(idx + 1, curr)

			return acc
		},
		[new Map(), new Map()]
	)

	let count = shift
	const decryptedArr = arr
		.join('')
		.split('')
		.reduce((acc: string[], char) => {
			let word = ''

			if (alphabetLower.includes(char) || alphabetUpper.includes(char)) {
				if (char === char.toUpperCase()) {
					const postShiftCode = alphabetUpperCode.get(char) ?? 0
					let preShiftCode = postShiftCode - count
					preShiftCode =
						preShiftCode < 0
							? Math.abs(preShiftCode % 26) === 0
								? 0
								: 26 - (Math.abs(preShiftCode) % 26)
							: preShiftCode
					const preShiftChar = codeUpperAlphabet.get(preShiftCode)

					word += preShiftChar
				} else {
					const postShiftCode = alphabetLowerCode.get(char) ?? 0
					let preShiftCode = postShiftCode - count
					preShiftCode =
						preShiftCode < 0
							? Math.abs(preShiftCode % 26) === 0
								? 0
								: 26 - (Math.abs(preShiftCode) % 26)
							: preShiftCode
					const preShiftChar = codeLowerAlphabet.get(preShiftCode)

					word += preShiftChar
				}
			} else word += char

			acc.push(word)
			count += 1

			return acc
		}, [])

	return decryptedArr.join('')
}

const test = 'I should have known that you would have a perfect answer for me!!!'
console.log(movingShift(test, 1))
const sol = [
	'J vltasl rlhr ',
	'zdfog odxr ypw',
	' atasl rlhr p ',
	'gwkzzyq zntyhv',
	' lvz wp!!!',
]
console.log(demovingShift(sol, 1))
